import OrdinalFrame from "semiotic/lib/OrdinalFrame"
import React from 'react';
import './Waterfall.css';
import {useStore} from "react-redux";

const Graph = () => {
    const store = useStore();

    const layersPrice = Number(store.getState().cakeReducer.cake.layersPrice);
    const nesto = Number(store.getState().cakeReducer.cake.nesto);

    /*calculation for min and max y axis */
    const valueArray=[
        layersPrice,
        nesto
        ];
    let zbir=valueArray[0];
    let min=0;
    let max=0;
    if(valueArray[0]>=0){
        max=valueArray[0];
        min=0
    }else{
        min=valueArray[0];
        max=0
    }
    for(let i=1;i<valueArray.length-1;i++){
        if(valueArray[i]+zbir>max){
            max=valueArray[i]+zbir;
        }else if(valueArray[i]+zbir<min){
            min=valueArray[i]+zbir;
        }
        zbir=zbir + valueArray[i]
    }
    const frameProps = {   
        data: [
            { name: "layersPrice", value: layersPrice },
            { name: "nesto", value: nesto },
            { name: "Total price" }
            ],

        size: [800,630],
        margin: { left: 50, top: 70, bottom: 250, right: 70 },
        type: waterfall,
        oPadding: 32,
        oAccessor: "name",
        rAccessor: "value",
        rExtent: [0,400],
        axes: [
            { tickSize:0, 
              orient: "left", 
              stroke:'#AFAFAF'},
            { ticks:1, tickValues:[0],  orient: "left", stroke:'#AFAFAF' },
        ],

        oLabel: d => <text style={{ fontSize: '12px', lineHeight:'19px', fill:'#000', textAnchor: "middle"}}>{d}</text>,
        
    };

    function waterfall({ data, rScale, adjustedSize }) {
        const renderedPieces = [];
        let currentY = 0;
        let currentValue = 0;
        const zeroValue = rScale(0);

        const formatLabel = (name, value) => {
            let label = `${(name === "Total price" ? Math.abs(value).toFixed(0) : value) }$`;
            return label
        };

        //color of the bar for different values
        const fillRule = d =>
            d.name === "Total price" ? "#430505" : d.value === 0? "#009FDF":  d.value > 0 ? "#FFD100" : "#009FDF";
        //0 value bar height 1px
        const barHeight = (d, height) =>
            d.value === 0 ? 1 :Math.abs(height);

        const keys = Object.keys(data);

        keys.forEach(key => {
            //assume only one per column though...
            const thisPiece = data[key].pieceData[0].data;
            let value = thisPiece.value;
            const name = thisPiece.name;
            if (name === "Total price") {
                value = -currentValue
            } else {
                currentValue += value
            }
            const thisColumn = data[name];

            const { x, width } = thisColumn;
            const height = rScale(value) - zeroValue;
            const margin = frameProps.margin;
            /*correction for start y position of chart */
            const correctionY = (rScale(1) - zeroValue)*min;

            let y = adjustedSize[1] - margin.top - height + correctionY;
            if (height < 0) {
                y = adjustedSize[1] - margin.top + correctionY
            }
            y += margin.top + currentY;

            const markObject = {
                o: key,
                piece: thisPiece,
                renderElement: {
                    markType: "g",
                    children: []
                },
                xy: {
                    x: x + width / 2,
                    y: y
                }
            };

            renderedPieces.push(markObject);

            markObject.renderElement.children.push(
                <rect
                    fill='#80CFEF'
                    height={barHeight(thisPiece, height)}
                    x={x}
                    y={y}
                    width={width}
                    style={{ fill: fillRule(thisPiece) }}
                ><title>There's some text</title></rect>
            );
            const lineY = name === "Total price" || value > 0 ? y : y + Math.abs(height);
            //line style
            if (name !== "Total price") {
                markObject.renderElement.children.push(
                    <line
                        x1={x + width}
                        x2={x + width + frameProps.oPadding}
                        y1={lineY}
                        y2={lineY}
                        style={{ stroke: "#D1D1D1", strokeLinecap: "butt", strokeWidth: "1px" }}
                    />
                )
            }
            //position labels
            const textOffset = name === "Total price" || value > 0 ? -15 : 20;
            //labels style
            markObject.renderElement.children.push(
                <text
                    x={x + width / 2}
                    y={lineY + textOffset}
                    style={{ fontSize: "16px", lineHeight:"30px", textAnchor: "middle", fill: "#757575" }}
                >
                    {formatLabel(name, value)}
                </text>
            );
            currentY -= height
        });
        return renderedPieces
    }
    return <OrdinalFrame {...frameProps} />;
};

export default Graph;
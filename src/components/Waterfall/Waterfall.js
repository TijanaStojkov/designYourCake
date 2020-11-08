import OrdinalFrame from "semiotic/lib/OrdinalFrame"
import React, { useEffect } from 'react';
import './Waterfall.scss';
import { useSelector } from 'react-redux';
import { CAKE_PRICES } from '../../const/cake-prices';

const Graph = () => {
    const store = useSelector((state)=>state)
    useEffect(() => {
        console.log('Waterfall')      
    });
    const layers = Number(CAKE_PRICES[store.cakeReducer.cake.layers]);
    const customMessage = Number(store.cakeReducer.cake.customMessage===true?CAKE_PRICES['customMessage']:0);
    const flowers = Number(store.cakeReducer.cake.flowers===true?CAKE_PRICES['flowers']:0);
    const ediblePearls = Number(store.cakeReducer.cake.ediblePearls===true?CAKE_PRICES['ediblePearls']:0);
    const strawberries = Number(store.cakeReducer.cake.strawberries===true?CAKE_PRICES['strawberries']:0);
    const candles = Number(store.cakeReducer.cake.candles===true?CAKE_PRICES['candles']:0);
    const fireworks = Number(store.cakeReducer.cake.fireworks===true?CAKE_PRICES['fireworks']:0);

    /*calculation for min and max y axis */
    const valueArray=[
        layers,
        customMessage,
        flowers,
        ediblePearls,
        strawberries,
        candles,
        fireworks,
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
            { name: "Layers", value: layers, idText:1, idLine:11, idRect:111},
            { name: "Message", value: customMessage, idText:2, idLine:22, idRect:222 },
            { name: "Flowers", value: flowers, idText:3, idLine:33, idRect:333 },
            { name: "Pearls", value: ediblePearls, idText:4, idLine:44, idRect:444 },
            { name: "Strawberries", value: strawberries, idText:5, idLine:55, idRect:555 },
            { name: "Candles", value: candles, idText:6, idLine:66, idRect:666 },
            { name: "Fireworks", value: fireworks, idText:7, idLine:77, idRect:777 },
            { name: "Total price", idText:8, idLine:88, idRect:888 }
            ],
        size: [500,200],
        margin: { left: 50, top: 70, bottom: 50, right: 70 },
        type: waterfall,
        oPadding: 32,
        oAccessor: "name",
        rAccessor: "value",
        rExtent: [0,200],
        axes: [
            { tickSize:0, 
              orient: "left", 
              stroke:'#AFAFAF'},
            { ticks:1, tickValues:[0],  orient: "left", stroke:'#AFAFAF' },
        ],
        oLabel: d => {
            const abel = d!='Total price'?
            <text style={{ fontSize: '8px', lineHeight:'19px', fill:'#000', textAnchor: "middle"}}>{d}</text>:
            <text style={{ fontWeight:'bold', fontSize: '9px', lineHeight:'19px', fill:'#000', textAnchor: "middle"}}>{d}</text>

            return abel
        },
        
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

            const vizPieces = [];

                vizPieces.push(
                <rect
                    key={thisPiece.idRect}
                    fill='#80CFEF'
                    height={barHeight(thisPiece, height)}
                    x={x}
                    y={y}
                    width={width}
                    style={{ fill: fillRule(thisPiece) }}
                ></rect>
            );
            const lineY = name === "Total price" || value > 0 ? y : y + Math.abs(height);
            //line style
            if (name !== "Total price") {
                vizPieces.push(
                    <line
                        key={thisPiece.idLine}
                        x1={x + width}
                        x2={x + width + frameProps.oPadding}
                        y1={lineY}
                        y2={lineY}
                        style={{ stroke: "#D1D1D1", strokeLinecap: "butt", strokeWidth: "1px" }}
                    />
                )
            }
            //position labels
            const textOffset = -15;
            //labels style
            vizPieces.push(
                <text
                    key={thisPiece.idText}
                    x={x + width / 2}
                    y={lineY + textOffset}
                    style={{ fontSize: "11px", lineHeight:"30px", textAnchor: "middle", fill: "#757575" }}
                >
                    {formatLabel(name, value)}
                </text>
            );
            markObject.renderElement = <g key={thisPiece.name}>{vizPieces}</g>;

            currentY -= height
        });
        return renderedPieces
    }
    return <OrdinalFrame {...frameProps} />;
};

export default Graph;

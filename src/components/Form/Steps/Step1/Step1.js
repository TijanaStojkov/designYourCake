import React, { Component } from 'react';
import './Step1.scss'

//images
import { IMAGES } from '../../../../const/images';

//transition
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../../assets/scss/transition.scss';

//components
import ImageDiv from '../Parts/ImageDiv';

const Step1 = (props) => {
        let layers = {
            rectangular: {
                'rectangular-one': {
                    divSize: 's4',
                    imageSrc: `${IMAGES.rectangular1}`,
                    imageAlt: 'rectangular1',
                    imageParagraf: '10-12 pepole (40$)'
                },
                'rectangular-two': {
                    divSize: 's4',
                    imageSrc: `${IMAGES.rectangular2}`,
                    imageAlt: 'rectangular2',
                    imageParagraf: '20-24 pepole (80$)'
                },
                'rectangular-tree': {
                    divSize: 's4',
                    imageSrc: `${IMAGES.rectangular3}`,
                    imageAlt: 'rectangular3',
                    imageParagraf: '30-38 pepole (125$)'
                }
            },
            round: {
                'round-one': {
                    divSize: 's4',
                    imageSrc: `${IMAGES.round1}`,
                    imageAlt: 'round1',
                    imageParagraf: '10-12 pepole (40$)'
                },
                'round-two': {
                    divSize: 's4',
                    imageSrc: `${IMAGES.round2}`,
                    imageAlt: 'round2',
                    imageParagraf: '20-24 pepole (80$)'
                },
                'round-tree': {
                    divSize: 's4',
                    imageSrc: `${IMAGES.round3}`,
                    imageAlt: 'round3',
                    imageParagraf: '30-38 pepole (125$)'
                }
            }
        }
        let selectedRow = null;
        if(props.selected==='rectangular'){
            selectedRow =
                <div className='row' style={{position:'absolute',minWidth: '500px'}}>
                    {Object.keys(layers.rectangular).map(key=>(
                        <ImageDiv
                            key = {key}
                            divSize = {layers.rectangular[key].divSize}
                            imageClass = {`img-shape ${props.layers===key?'border':''}`}
                            imageSrc = {layers.rectangular[key].imageSrc}
                            imageAlt = {layers.rectangular[key].imageAlt}
                            imageOnClick= {()=>props.changeLayersHandler(key)}
                            imageParagraf = {layers.rectangular[key].imageParagraf}
                        />
                        ))}
                </div>
        }else if(props.selected==='round'){
            selectedRow =
                <div className='row' style={{position:'absolute',minWidth: '500px'}}>
                   {Object.keys(layers.round).map(key=>(
                    <ImageDiv
                        key = {key}
                        divSize = {layers.round[key].divSize}
                        imageClass = {`img-shape ${props.layers===key?'border':''}`}
                        imageSrc = {layers.round[key].imageSrc}
                        imageAlt = {layers.round[key].imageAlt}
                        imageOnClick= {()=>props.changeLayersHandler(key)}
                        imageParagraf = {layers.round[key].imageParagraf}
                    />
                    ))}
                </div>
        }
        return (
            <div className='Step1'>
                <div className='container'>
                    <h5>Coose cake shape</h5>
                    <div className='row' >
                        <img className={`img-shape ${props.selected==='rectangular'?'border':''}`} src={IMAGES.rectangular1} alt={'rectangular1'} onClick={(event)=>props.selectedHandler(event,'rectangular')}/>
                        <img className={`img-shape ${props.selected==='round'?'border':''}`}  src={IMAGES.round1} alt={'round1'} onClick={(event)=>props.selectedHandler(event,'round')}/>
                    </div>
                    <div className='row' style={{position:'relative'}}>
                        <h5>Coose number of layers</h5>
                        <TransitionGroup >
                            <CSSTransition
                                key={props.selected}
                                timeout={300}
                                classNames="fade"
                            >
                                 {selectedRow}
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>    
            </div>
        )
    }

export default Step1;
import React, { Component } from 'react';
import './Step1.scss'

//images
import { IMAGES } from '../../../../const/images';

//transition
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../../assets/scss/transition.scss';

const Step1 = (props) => {

        let selectedRow = null;
        if(props.selected==='rectangular'){
            selectedRow=
            <div className='row' style={{position:'absolute',minWidth: '500px'}}>
                <div className='col s4'>
                    <img className={`img-shape ${props.layers==='rectangular-one'?'border':''}`} src={IMAGES.rectangular1} alt={'rectangular1'} onClick={()=>props.changeLayersHandler('rectangular-one')}/>
                    <p>10-12 pepole (40$)</p>
                </div>
                <div className='col s4'>
                    <img className={`img-shape ${props.layers==='rectangular-two'?'border':''}`} src={IMAGES.rectangular2} alt={'rectangular2'} onClick={()=>props.changeLayersHandler('rectangular-two')}/>
                    <p>20-24 pepole (80$)</p>
                </div>
                <div className='col s4'>
                    <img className={`img-shape ${props.layers==='rectangular-tree'?'border':''}`} src={IMAGES.rectangular3} alt={'rectangular3'} onClick={()=>props.changeLayersHandler('rectangular-tree')}/>                                
                    <p>30-38 pepole (125$)</p>
                </div>
            </div>
        }else if(props.selected==='round'){
            selectedRow=
                <div className='row' style={{position:'absolute',minWidth: '500px'}}>
                    <div className='col s4'>
                        <img className={`img-shape ${props.layers==='round-one'?'border':''}`} src={IMAGES.round1} alt={'round1'} onClick={()=>props.changeLayersHandler('round-one')}/>
                        <p>10-12 pepole (40$)</p>
                    </div>
                    <div className='col s4'>
                        <img className={`img-shape ${props.layers==='round-two'?'border':''}`} src={IMAGES.round2} alt={'round2'} onClick={()=>props.changeLayersHandler('round-two')}/>
                        <p>20-24 pepole (80$)</p>
                    </div>
                    <div className='col s4'>
                        <img className={`img-shape ${props.layers==='round-tree'?'border':''}`} src={IMAGES.round3} alt={'round3'} onClick={()=>props.changeLayersHandler('round-tree')}/>
                        <p>30-38 pepole (125$)</p>
                    </div>
                </div>
        }
        return (
            <div  >
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
import React, {Component} from 'react';

import { Checkbox, Textarea } from 'react-materialize';

//transition
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../../assets/scss/transition.scss';
const Step3 = (props) => {
    return(
        <div className='Step3'>
            <div className='container'>
                <h5>Choose decorations {props.layers}</h5>
                <div className='row'>
                    <div className='col s12'>
                        <Checkbox id="customMessage" label="Custom Message +$10.00" checked={props.customMessage} onChange = {(event)=>props.changeValueHandler('customMessage', event.target.checked)} />
                    </div>
                    <div className='col s12'>
                        <Checkbox id="flowers" label="Flowers +$10.00" checked={props.flowers} onChange = {(event)=>props.changeValueHandler('flowers', event.target.checked)}/>
                    </div>
                    <div className='col s12'>
                        <Checkbox id="ediblePearls" label="Edible pearls +$15.00" checked={props.ediblePearls} onChange = {(event)=>props.changeValueHandler('ediblePearls', event.target.checked)}/>
                    </div>
                    <div className='col s12'>
                        <Checkbox id="strawberries" label="Chocolate Covered Strawberries (6) +$18.00" checked={props.strawberries} onChange = {(event)=>props.changeValueHandler('strawberries', event.target.checked)}/>
                    </div>
                    <div className='col s12'>
                        <Checkbox id="candles" label="Candles +$5.00" checked={props.candles} onChange = {(event)=>props.changeValueHandler('candles', event.target.checked)}/>
                    </div>
                    <div className='col s12'>
                        <Checkbox id="fireworks" label="Fireworks +$15.00" checked={props.fireworks} onChange = {(event)=>props.changeValueHandler('fireworks', event.target.checked)}/>
                    </div>
                </div>
                { props.customMessage &&
                <CSSTransition
                    in={props.customMessage}
                    appear={true}
                    timeout={300}
                    classNames="fade"
                    >
                        <div className='row'>
                        <h5>Message on Cake (Max 50 Chars)</h5>
                        <Textarea
                            maxLength={50}
                            data-length={50}
                            id="Textarea-12"
                            value={props.message}
                            label="Your message"
                            style={{ width:'400px'}} 
                            onChange={(event)=>props.changeValueHandler('message',event.target.value)}
                        />
                        </div>
                </CSSTransition>
                } 
                </div>
            </div> 
    )
}
export default Step3;
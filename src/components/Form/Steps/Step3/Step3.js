import React, {Component} from 'react';
import './Step3.scss';

import { Checkbox, Textarea } from 'react-materialize';

//materialize
import { RadioGroup } from 'react-materialize'; 

//transition
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../../assets/scss/transition.scss';

const Step3 = (props) => {

    //frosting
    const frosting = 
        <div >
            <RadioGroup
                label="Frosting"
                name="frosting"
                onChange = {(event) => props.changeValueHandler('frosting', event.target.value)}
                options={[
                {
                    label: 'Chocolate',
                    value: 'chocolate'
                },
                {
                    label: 'Whipped cream',
                    value: 'whippedCream'
                }
                ]}
                value={ props.frosting}
            />
        </div>

        //Message
        let message = <div></div>;
        if(props.message && props.customMessage!==false){
            message = <div 
                        className={props.selected==='round'?'messageDivRound':'messageDivRectangular'}
                        style={{backgroundColor:`${props.frosting==='chocolate'?'#430505':'#DED9AB'}`,
                                color:`${props.frosting==='chocolate'?'#DED9AB':'#430505'}`}}>{props.message}
                        </div>;
        };
    return(
        <div className='Step3'>
            <div className='container'>
                <div className='row'>
                <h5>Choose decorations {props.layers}</h5>
                    <div className={`${props.noDecoration?'checkedboxDisabled':null} col s12`}>
                        <Checkbox id="customMessage" disabled={props.noDecoration} className={props.noDecoration?'checkedboxDisabled':null} label="Custom Message +$10.00" checked={props.customMessage} onChange = {(event)=>props.changeValueHandler('customMessage', event.target.checked)} />
                    </div>
                    <div className={`${props.noDecoration?'checkedboxDisabled':null} col s12`}>
                        <Checkbox id="flowers" disabled={props.noDecoration} className={props.noDecoration?'checkedboxDisabled':null} label="Flowers +$10.00" checked={props.flowers} onChange = {(event)=>props.changeValueHandler('flowers', event.target.checked)}/>
                    </div>
                    <div className={`${props.noDecoration?'checkedboxDisabled':null} col s12`}>
                        <Checkbox id="ediblePearls" disabled={props.noDecoration} className={props.noDecoration?'checkedboxDisabled':null} label="Edible pearls +$15.00" checked={props.ediblePearls} onChange = {(event)=>props.changeValueHandler('ediblePearls', event.target.checked)}/>
                    </div>
                    <div className={`${props.noDecoration?'checkedboxDisabled':null} col s12`}>
                        <Checkbox id="strawberries" disabled={props.noDecoration} className={props.noDecoration?'checkedboxDisabled':null} label="Chocolate Covered Strawberries (6) +$18.00" checked={props.strawberries} onChange = {(event)=>props.changeValueHandler('strawberries', event.target.checked)}/>
                    </div>
                    <div className={`${props.noDecoration?'checkedboxDisabled':null} col s12`}>
                        <Checkbox id="candles" disabled={props.noDecoration} className={props.noDecoration?'checkedboxDisabled':null} label="Candles +$5.00" checked={props.candles} onChange = {(event)=>props.changeValueHandler('candles', event.target.checked)}/>
                    </div>
                    <div className={`${props.noDecoration?'checkedboxDisabled':null} col s12`}>
                        <Checkbox id="fireworks" disabled={props.noDecoration} className={props.noDecoration?'checkedboxDisabled':null} label="Fireworks +$15.00" checked={props.fireworks} onChange = {(event)=>props.changeValueHandler('fireworks', event.target.checked)}/>
                    </div>
                    <div className='col s12'>
                        <Checkbox id="noDecoration" label="No decortions" checked={props.noDecoration} onChange = {(event)=>props.changeNoDecorationHandler('noDecoration', event.target.checked)} />
                    </div>
                </div>
                <h5>Choose frosting</h5>
                { frosting }
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
                <CSSTransition
                    unmountOnExit
                    in={props.message}
                    appear={true}
                    timeout={300}
                    classNames="fade"
                    >{message}
                </CSSTransition>
            </div>
        </div> 
    )
}
export default Step3;
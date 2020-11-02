import React from 'react';
import './Cake.scss';
import redCandle from '../../assets/images/candles/redCandle.png';
import fireworkRed from '../../assets/images/fireworks/firework-red.psd';
import fireworkBlue from '../../assets/images/fireworks/firework-blue.psd';
import { IMAGES } from '../../const/images'

//redux
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';
import '../../assets/scss/transition.scss';

class cake extends React.Component{

    render(){
        let numberOfLayers = this.props.layers.split('-')[1];
        //Spange and filling
        let styleCake = `cake 
            ${this.props.spange==='spangeRed'?' cakeRedSpange':
            this.props.spange==='spangeBrown'?' cakeBrownSpange':
            this.props.spange==='spangeYellow'?' cakeYellowSpange':' '}
            
            ${this.props.filling==='fillingBrown'?' fillingBrown':
            this.props.filling==='fillingPink'?' fillingPink':
            this.props.filling==='fillingWhite'?' fillingWhite':
            this.props.filling==='fillingPurple'?' fillingPurple':' '}
            `;

        //Icing
        const icingColor = this.props.icing;
        let bottomIcing = [];
        for(let i=0; i<12; i++){
            bottomIcing.push(<img className='icingOnCake' src={IMAGES[icingColor]}/>)
        }
        let middleIcing = [];
        for(let i=0; i<9; i++){
            middleIcing.push(<img className='icingOnCake' src={IMAGES[icingColor]}/>)
        }
        let topIcing = [];
        for(let i=0; i<5; i++){
            topIcing.push(<img className='icingOnCake' src={IMAGES[icingColor]}/>)
        };

        //Layers
        let layers = null;
        if(numberOfLayers ==='one'){
            layers = <section className={styleCake } id="cake--bottom">
                    <div className='icingDiv'>
                        {bottomIcing}   
                    </div>
                </section>
        }else if(numberOfLayers ==='two'){
            layers = 
                <div>
                    <section className={styleCake } id="cake--middle">
                        <div className='icingDiv'>
                            {middleIcing}   
                        </div>
                    </section>
                    <section className={styleCake } id="cake--bottom">
                        <div className='icingDiv'>
                            {bottomIcing}   
                        </div>
                    </section>
                </div>
        }else if(numberOfLayers ==='tree'){
             layers= 
                <div>
                    <section className={styleCake } id="cake--top">
                        <div className='icingDiv'>
                            {topIcing}   
                        </div>
                    </section>
                    <section className={styleCake } id="cake--middle">
                        <div className='icingDiv'>
                            {middleIcing}   
                        </div>
                    </section>
                    <section className={styleCake } id="cake--bottom">
                        <div className='icingDiv'>
                            {bottomIcing}   
                        </div>
                    </section>
                </div>
        };

        //Fireworks
        let redFirework = null;
        if(this.props.fireworks){
            redFirework = <span className="firework"><img src={fireworkRed} alt={'fireworkRed'}/></span>
        };
        let blueFirework = null;
        if(this.props.fireworks){
            blueFirework = <span className="firework"><img src={fireworkBlue} alt={'fireworkBlue'}/></span>
        };

        //Candles
        let candles = null;
        if(this.props.candles){
            candles = 
                <div>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                </div>
        };

        //Message
        let message = <div></div>;
        if(this.props.message && this.props.customMessage!==false){
            message = <div className={this.props.selected==='round'?'messageDivRound':'messageDivRectangular'}>{this.props.message}</div>;
        };

        return(
            <section className="cakeContainer">
                <section id="cake">
                    <div className='cakePosition'>
                        <section className="candles-top">
                            {redFirework}
                            {candles}
                            {blueFirework}
                        </section>
                        {layers}
                    </div>
                </section>
                <CSSTransition
                unmountOnExit
                        in={this.props.message}
                        appear={true}
                        timeout={300}
                        classNames="fade"
                        >{message}
                </CSSTransition>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return{
        layers: state.cakeReducer.cake.layers,
        spange: state.cakeReducer.cake.spange,
        icing: state.cakeReducer.cake.icing,
        filling: state.cakeReducer.cake.filling,
        candles: state.cakeReducer.cake.candles,
        fireworks: state.cakeReducer.cake.fireworks,
        message: state.cakeReducer.cake.message,
        customMessage: state.cakeReducer.cake.customMessage,
        selected: state.cakeReducer.cake.selected,
    }
}
export default connect(mapStateToProps)(cake);
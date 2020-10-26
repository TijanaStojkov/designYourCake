import React from 'react';
import './Cake.scss';
import redCandle from '../../assets/images/candles/redCandle.png';
import fireworkRed from '../../assets/images/fireworks/firework-red.psd';
import fireworkBlue from '../../assets/images/fireworks/firework-blue.psd';

//redux
import { connect } from 'react-redux';

class cake extends React.Component{

    render(){
        let styleCake = ['cake', 'cakeRedSpangeBlueIcing'].join(' ')
        let numberOfLayers = this.props.layers.split('-')[1];
        let layers = null;
        if(numberOfLayers ==='one'){
            layers = <section className={styleCake } id="cake--bottom"></section>
        }else if(numberOfLayers ==='two'){
            layers = 
                <div>
                    <section className={styleCake } id="cake--middle"></section>
                    <section className={styleCake } id="cake--bottom"></section>
                </div>
        }else if(numberOfLayers ==='tree'){
             layers= 
                <div>
                    <section className={styleCake } id="cake--top"></section>
                    <section className={styleCake } id="cake--middle"></section>
                    <section className={styleCake } id="cake--bottom"></section>
                </div>
        }
        return(
            <section className="container">
            <section id="cake">
                <section className="candles-top">
                    <span className="firework"><img src={fireworkRed} alt={'fireworkRed'}/></span>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                    <span className="firework"><img src={fireworkBlue} alt={'fireworkBlue'}/></span>
                </section>
                {layers}
            </section>
        </section>
        )
    }
}
const mapStateToProps = state => {
    return{
        layers: state.cakeReducer.cake.layers
    }
}
export default connect(mapStateToProps)(cake);
import React from 'react';
import './Cake.scss';
import redCandle from '../../assets/images/candles/redCandle.png';
import fireworkRed from '../../assets/images/fireworks/firework-red.psd';
import fireworkBlue from '../../assets/images/fireworks/firework-blue.psd';

//redux
import { connect } from 'react-redux';

class cake extends React.Component{

    render(){
        let numberOfLayers = this.props.layers.split('-')[1];
        let styleCake = `cake 
            ${this.props.spange==='spangeRed'?' cakeRedSpange':
            this.props.spange==='spangeBrown'?' cakeBrownSpange':
            this.props.spange==='spangeYellow'?' cakeYellowSpange':' '}
            
            ${this.props.icing==='icingBlue'?' icingBlue':
            this.props.icing==='icingRed'?' icingRed':
            this.props.icing==='icingGreen'?' icingGreen':
            this.props.icing==='icingGray'?' icingGray':
            this.props.icing==='icingYellow'?' icingYellow':
            this.props.icing==='icingOrange'?' icingOrange':' '}
            `
        let layers = null;
        if(numberOfLayers ==='one'){
            layers = <section className={styleCake } id="cake--bottom"></section>
        }else if(numberOfLayers ==='two'){
            layers = 
                <div>
                    <section 
                        className={styleCake } id="cake--middle"></section>
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
        layers: state.cakeReducer.cake.layers,
        spange: state.cakeReducer.cake.spange,
        icing: state.cakeReducer.cake.icing

    }
}
export default connect(mapStateToProps)(cake);
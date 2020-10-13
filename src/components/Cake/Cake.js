import React from 'react';
import './Cake.scss';
import redCandle from '../../assets/images/candles/redCandle.png';
import fireworkRed from '../../assets/images/fireworks/firework-red.psd';
import fireworkBlue from '../../assets/images/fireworks/firework-blue.psd'

const cake = () => {
    let styleCake = ['cake', 'cakeRedSpangeBlueIcing'].join(' ')
    return (
        <section className="container">
            <section id="cake">
                <section className="candles-top">
                    <span className="firework"><img src={fireworkRed} alt={'fireworkRed'}/></span>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                    <span className="candle"><img src={redCandle} alt={'redCandle'}/></span>
                    <span className="firework"><img src={fireworkBlue} alt={'fireworkBlue'}/></span>
                </section>
                <section className={styleCake } id="cake--top"></section>
                <section className={styleCake } id="cake--middle"></section>
                <section className={styleCake } id="cake--bottom"></section>
            </section>
        </section>
    )
}
export default cake;
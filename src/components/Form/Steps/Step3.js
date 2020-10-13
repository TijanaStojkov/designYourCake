import React from 'react';
import './Steps.scss';

import { Checkbox, Textarea } from 'react-materialize';

const step2 = () => {
    return (
        <div >
            <div className='container'>
                <h5>Coose decorations</h5>
                <div className='row'>
                    <div className='col s12'>
                        <Checkbox id="customMessage" label="Custom Message +$10.00" value="customMessage" />
                    </div>
                    <div className='col s12'>
                        <Checkbox id="flowers" label="Flowers +$10.00" value="flowers" />
                    </div>
                    <div className='col s12'>
                        <Checkbox id="editablePearls" label="Editable pearls +$15.00" value="editablePearls" />
                    </div>
                    <div className='col s12'>
                        <Checkbox id="strawberries" label="Chocolate Covered Strawberries (6) +$18.00" value="strawberries" />
                    </div>
                    <div className='col s12'>
                        <Checkbox id="candles" label="Candles +$5.00" value="candles" />
                    </div>
                    <div className='col s12'>
                        <Checkbox id="fireworks" label="Fireworks +$15.00" value="fireworks" />
                    </div>
                </div>
                <div className='row'>
                    <h5>Message on Cake +$20(Max 50 Chars)</h5>
                    <Textarea
                        data-length={50}
                        id="Textarea-12"
                        label="Your message"
                        style={{ width:'400px'}} 
                    />
                    </div> 
                </div>
            </div>
    )
}
export default step2;
import React from 'react';
import './Steps.scss';

//images
import spangeRed from '../../../assets/images/cake-spange/spange-red.jpg';
import spangeBrown from '../../../assets/images/cake-spange/spange-brown.jpg';
import spangeYellow from '../../../assets/images/cake-spange/spange-yellow.jpg';

import icingBlue from '../../../assets/images/cake-icing/icing-blue.png';
import icingRed from '../../../assets/images/cake-icing/icing-red.png';
import icingYellow from '../../../assets/images/cake-icing/icing-yellow.png';
import icingGreen from '../../../assets/images/cake-icing/icing-green.png';
import icingOrange from '../../../assets/images/cake-icing/icing-orange.png';
import icingGray from '../../../assets/images/cake-icing/icing-gray.png';

const step2 = () => {
    return (
        <div>
                <div className='container'>
                    <h5>Coose cake spange</h5>
                    <div className='row'>
                        <div className='col s4'>
                            <img className='img-spange' src={spangeRed} alt={'spangeRed'}/>
                            <p>Strawbery</p>
                        </div>
                        <div className='col s4'>
                            <img className='img-spange' src={spangeBrown} alt={'spangeBrown'}/>
                            <p>Chocolate</p>
                        </div>
                        <div className='col s4'>
                            <img className='img-spange' src={spangeYellow} alt={'spangeYellow'}/>
                            <p>Vanila</p>
                        </div>
                    </div>
                    <div className='row'>
                        <h5>Choose icing color</h5>
                        <div className='row'>
                            <div className='col s3'>
                                <img className='img-icing' src={icingBlue} alt={'icingBlue'}/>
                            </div>
                            <div className='col s3'>
                                <img className='img-icing' src={icingRed} alt={'icingRed'}/>
                            </div>
                            <div className='col s3'>
                                <img className='img-icing' src={icingGreen} alt={'icingGreen'}/>
                            </div>
                            <div className='col s3'>
                                <img className='img-icing' src={icingGray} alt={'icingGray'}/>
                            </div>
                            <div className='col s3'>
                                <img className='img-icing' src={icingYellow} alt={'icingYellow'}/>
                            </div>
                            <div className='col s3'>
                                <img className='img-icing' src={icingOrange} alt={'icingOrange'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default step2;
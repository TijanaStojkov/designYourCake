import React from 'react';
import './Steps.scss'

//images
import round1 from '../../../assets/images/cakes-shape/round1.png';
import round2 from '../../../assets/images/cakes-shape/round2.png';
import round3 from '../../../assets/images/cakes-shape/round3.png';
import rectangular1 from '../../../assets/images/cakes-shape/rectangular1.png';
import rectangular2 from '../../../assets/images/cakes-shape/rectangular2.png';
import rectangular3 from '../../../assets/images/cakes-shape/rectangular3.png';

const step1 = () => {
    return (
        <div  >
            <div className='container'>
                <h5>Coose cake shape</h5>
                <div className='row'>
                    <img className='img-shape' src={rectangular1} alt={'rectangular1'}/>
                    <img className='img-shape' src={round1} alt={'round1'}/>
                </div>
                <div className='row'>
                    <h5>Coose number of layers</h5>
                    <div className='row'>
                        <div className='col s4'>
                            <img className='img-shape' src={rectangular1} alt={'rectangular1'}/>
                            <p>10-12 pepole (40$)</p>
                        </div>
                        <div className='col s4'>
                            <img className='img-shape' src={rectangular2} alt={'rectangular2'}/>
                            <p>20-24 pepole (80$)</p>
                        </div>
                        <div className='col s4'>
                            <img className='img-shape' src={rectangular3} alt={'rectangular3'}/>                                
                            <p>30-38 pepole (125$)</p>
                        </div>
                        {/*<div className='col s3'>
                            <img className='img-shape' src={round1} alt={'round1'}/>
                            <p>10-12 pepole (40$)</p>
                        </div>
                        <div className='col s3'>
                            <img className='img-shape' src={round2} alt={'round2'}/>
                            <p>20-24 pepole (80$)</p>
                        </div>
                        <div className='col s3'>
                            <img className='img-shape' src={round3} alt={'round3'}/>
                            <p>30-38 pepole (125$)</p>
                        </div>*/}
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default step1;
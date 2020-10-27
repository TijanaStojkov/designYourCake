import React from 'react';
import './ProgressBar.scss';

const progressBar = (props) => {
    const step = props.step;
    const progres = props.step===1? '25%':props.step===2? '50%':props.step===3? '75%':props.step===4? '100%':'0%'
    return (
        <div className='container'>
            <div className='row' style={{borderRadius: '10px', border: '1px solid #430505' }}>
                <div className="determinate purple accent-2 white-text bar" style={{width: progres}}>{progres}</div>				
            </div>
        </div>
    )
}
export default progressBar;
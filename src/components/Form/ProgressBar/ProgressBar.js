import React from 'react';
import './ProgressBar.scss';

const progressBar = (props) => {
    const progress = props.progress;
    let percentage
    switch (progress){
        case 1:
            percentage = 100/7 + '%';
        break;
        case 2:
            percentage = 100*2/7 + '%';
        break;
        case 3:
            percentage = 100*3/7 + '%';
        break;
        case 4:
            percentage = 100*4/7 + '%';
        break;
        case 5:
            percentage = 100*5/7 + '%';
        break;
        case 6:
            percentage = 100*6/7 + '%';
        break;
        case 7:
            percentage = 100/1 + '%';
        break;
        default:
        break;
    }
    return (
        <div className='container'>
            <div className='row' style={{borderRadius: '10px', border: '1px solid #430505' }}>
                <div className="determinate purple accent-2 white-text bar" style={{width: percentage, height: '7px'}}></div>				
            </div>
        </div>
    )
}
export default progressBar;
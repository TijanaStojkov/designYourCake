import React from 'react';

const progressBar = () => {
    return (
        <div className='container'>
            <div className='row' style={{borderRadius: '10px', border: '1px solid #430505' }}>
                <div className="determinate purple accent-2 white-text" style={{width: '50%', padding: '0 3px', borderRadius:'10px', animation: 'grow 2s', backgroundColor:'rgb(238, 238, 238)'}}>50%</div>				
            </div>
        </div>
    )
}
export default progressBar;
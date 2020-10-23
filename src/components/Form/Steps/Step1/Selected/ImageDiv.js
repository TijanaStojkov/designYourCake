import React from 'react';

const imgDiv = (props) => {
    return(
        <div className='col s4'>
            <img className={re1LayerStyle.join(' ')} src={rectangular1} alt={'rectangular1'} onClick={()=>this.props.changeLayersHandler('rectangular-one')}/>
            <p>10-12 pepole (40$)</p>
        </div>  
    )
}
export default imgDiv;
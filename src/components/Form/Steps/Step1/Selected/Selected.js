import React from 'react';

const selected = () => {
    return(
        <div className='row'>
            <div className='col s4'>
                <img className={re1LayerStyle.join(' ')} src={rectangular1} alt={'rectangular1'} onClick={()=>this.props.changeLayersHandler('rectangular-one')}/>
                <p>10-12 pepole (40$)</p>
            </div>
            <div className='col s4'>
                <img className={re2LayerStyle.join(' ')} src={rectangular2} alt={'rectangular2'} onClick={()=>this.props.changeLayersHandler('rectangular-two')}/>
                <p>20-24 pepole (80$)</p>
            </div>
            <div className='col s4'>
                <img className={re3LayerStyle.join(' ')} src={rectangular3} alt={'rectangular3'} onClick={()=>this.props.changeLayersHandler('rectangular-tree')}/>                                
                <p>30-38 pepole (125$)</p>
            </div>
        </div>
    )
}
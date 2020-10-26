import React, { Component } from 'react';
import './Step1.scss'

//images
import round1 from '../../../../assets/images/cakes-shape/round1.png';
import round2 from '../../../../assets/images/cakes-shape/round2.png';
import round3 from '../../../../assets/images/cakes-shape/round3.png';
import rectangular1 from '../../../../assets/images/cakes-shape/rectangular1.png';
import rectangular2 from '../../../../assets/images/cakes-shape/rectangular2.png';
import rectangular3 from '../../../../assets/images/cakes-shape/rectangular3.png';

//redux
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/allActions';

//transition
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../../assets/scss/transition.scss';

class Step1 extends Component {
    state = {
        selected: 'rectangular',
    }
    selectedHandler = (event, selected) => {
       event.preventDefault()
       this.setState({
           selected: selected,
       })
    }
    render(){
        let selectedRectangularClass = ['img-shape'];
        let selectedRoundClass = ['img-shape'];
        switch (this.state.selected){
            case 'rectangular':
                selectedRectangularClass.push('border')
                break;
            case 'round':
                selectedRoundClass.push('border')
                break;
            default:
                break;
        }
        let re1LayerStyle = ['img-shape'];
        let re2LayerStyle = ['img-shape'];
        let re3LayerStyle = ['img-shape'];
        let ro1LayerStyle = ['img-shape'];
        let ro2LayerStyle = ['img-shape'];
        let ro3LayerStyle = ['img-shape'];

        switch (this.props.layers){
            case 'rectangular-one':
                re1LayerStyle.push('border');
                break;
            case 'rectangular-two':
                re2LayerStyle.push('border');
                break;
            case 'rectangular-tree':
                re3LayerStyle.push('border');
                break;
            case 'round-one':
                ro1LayerStyle.push('border');
                break;
            case 'round-two':
                ro2LayerStyle.push('border');
                break;
            case 'round-tree':
                ro3LayerStyle.push('border');
                break;
            default:
                break;
        }
        let selectedRow = null;
        if(this.state.selected==='rectangular'){
            selectedRow=
            <div className='row' style={{position:'absolute',minWidth: '500px'}}>
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
        }else if(this.state.selected==='round'){
            selectedRow=
                <div className='row' style={{position:'absolute',minWidth: '500px'}}>
                    <div className='col s4'>
                        <img className={ro1LayerStyle.join(' ')} src={round1} alt={'round1'} onClick={()=>this.props.changeLayersHandler('round-one')}/>
                        <p>10-12 pepole (40$)</p>
                    </div>
                    <div className='col s4'>
                        <img className={ro2LayerStyle.join(' ')} src={round2} alt={'round2'} onClick={()=>this.props.changeLayersHandler('round-two')}/>
                        <p>20-24 pepole (80$)</p>
                    </div>
                    <div className='col s4'>
                        <img className={ro3LayerStyle.join(' ')} src={round3} alt={'round3'} onClick={()=>this.props.changeLayersHandler('round-tree')}/>
                        <p>30-38 pepole (125$)</p>
                    </div>
                </div>
        }
        return (
            <div  >
                <div className='container'>
                    <h5>Coose cake shape</h5>
                    <div className='row' >
                        <img className={selectedRectangularClass.join(' ')} src={rectangular1} alt={'rectangular1'} onClick={(event)=>this.selectedHandler(event,'rectangular')}/>
                        <img className={selectedRoundClass.join(' ')} src={round1} alt={'round1'} onClick={(event)=>this.selectedHandler(event,'round')}/>
                    </div>
                    <div className='row' style={{position:'relative'}}>
                        <h5>Coose number of layers</h5>
                        <TransitionGroup >
                            <CSSTransition
                                key={this.state.selected}
                                timeout={300}
                                classNames="fade"
                            >
                                 {selectedRow}
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>    
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        layers: state.cakeReducer.cake.layers,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeLayersHandler: (layers) => dispatch (actions.changeLayersHandler(layers))
    }
}    
export default connect(mapStateToProps,mapDispatchToProps)(Step1);
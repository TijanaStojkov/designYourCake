import React, {Component} from 'react';
import './Form.scss';

//components
import Aux from '../../hoc/Auxilary/Auxilary';
import Step1 from './Steps/Step1/Step1';
import Step2 from './Steps/Step2/Step2';
import Step3 from './Steps/Step3/Step3';
import Summary from './Steps/Summary/Summary';
import ProgressBar from './ProgressBar/ProgressBar';
import { Button } from 'react-materialize';

//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/allActions';

class Form extends Component{
    state = {
        step: 3,
        //Step1
        selected: 'rectangular',
    }
    addStepHandler = () => {
        this.setState({
            step:this.state.step + 1,
        }) 
    }
    removeStepHandler = () => {
    if(this.state.step!==1){
        this.setState({
            step:this.state.step - 1,
            }) 
        }
    }
    currentStep(){
        switch(this.state.step){
            case 1:
                return <Step1 
                            key={1} 
                            selected={this.state.selected} 
                            layers={this.props.layers}
                            selectedHandler={this.selectedHandler} 
                            changeValueHandler = {this.props.changeValueHandler}/>
            case 2:
                return <Step2 
                            key={2}
                            spange={this.props.spange}
                            changeSpangeHandler={this.props.changeSpangeHandler}
                            changeValueHandler={this.props.changeValueHandler}
                            />
            case 3:
                return <Step3 
                            key={3}
                            changeValueHandler={this.props.changeValueHandler}
                            customMessage={this.props.customMessage}
                            flowers={this.props.flowers}
                            ediblePearls={this.props.ediblePearls}
                            strawberries={this.props.strawberries}
                            candles={this.props.candles}
                            fireworks={this.props.fireworks}
                            />
            case 4:
                return <Summary/>
            default:
                return <Step1 key={1}/>
        }
    }
    //Step1

    selectedHandler = (event, selected) => {
        event.preventDefault()
        this.setState({
            selected: selected,
        })
     }
    render() {
        return(
            <Aux >
                <form onSubmit={this.handleSubmitForm} >
                    <ProgressBar step={this.state.step}/>
                    {this.currentStep()}
                </form>
                <div className='row'>
                    <Button className='brown darken-4 btn-prev' onClick={this.removeStepHandler}>Previous</Button>
                    <Button className='brown darken-4 btn-next' onClick={this.addStepHandler} >Next</Button>
                </div>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return{
        layers: state.cakeReducer.cake.layers,
        spange: state.cakeReducer.cake.spange,
        icing: state.cakeReducer.cake.icing,
        customMessage: state.cakeReducer.cake.customMessage,
        flowers: state.cakeReducer.cake.flowers,
        ediblePearls: state.cakeReducer.cake.ediblePearls,
        strawberries: state.cakeReducer.cake.strawberries,
        candles: state.cakeReducer.cake.candles,
        fireworks: state.cakeReducer.cake.fireworks
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeValueHandler: (name, value) => dispatch (actions.changeValueHandler(name, value)),
    }
}    
export default connect(mapStateToProps,mapDispatchToProps)(Form);
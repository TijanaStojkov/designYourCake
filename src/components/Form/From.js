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

//materialize
import { Icon } from 'react-materialize';

class Form extends Component{
    state = {
        step: 1,
        progress: ''
        //Step1
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
                            selected={this.props.selected} 
                            layers={this.props.layers}
                            selectedHandler={this.props.changeValueHandler} 
                            changeValueHandler = {this.props.changeValueHandler}/>
            case 2:
                return <Step2 
                            key={2}
                            spange={this.props.spange}
                            changeSpangeHandler={this.props.changeSpangeHandler}
                            changeValueHandler={this.props.changeValueHandler}
                            icing={this.props.icing}
                            filling={this.props.filling}
                            />
            case 3:
                return <Step3 
                            key={3}
                            changeValueHandler={this.props.changeValueHandler}
                            changeNoDecorationHandler={this.props.changeNoDecorationHandler}
                            customMessage={this.props.customMessage}
                            message={this.props.message}
                            flowers={this.props.flowers}
                            ediblePearls={this.props.ediblePearls}
                            strawberries={this.props.strawberries}
                            candles={this.props.candles}
                            fireworks={this.props.fireworks}
                            noDecoration={this.props.noDecoration}
                            frosting={this.props.frosting}
                            selected={this.props.selected}
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
        let selectedDecoration='';
        if(this.props.noDecoration===false && this.props.customMessage===false && this.props.flowers===false && this.props.ediblePearls===false && this.props.strawberries===false && this.props.candles===false && this.props.fireworks===false){
            selectedDecoration = ''
        }else{
            selectedDecoration = 'true'
        }
        let processArray = [this.props.layers, this.props.selected, this.props.spange, this.props.icing ,this.props.filling, selectedDecoration, this.props.frosting];
        let process = 0;

        processArray.forEach(step =>{
            console.log(step)
            if(step!==''){
                process=process+1 
            }
        })
        console.log(process)
        return(
            <Aux >
                <div className='row'>
                    <div className='col s1 arrows'>                        
                        <div style={{margin:'auto'}} onClick={this.removeStepHandler}><Icon>keyboard_arrow_left</Icon></div>
                    </div>
                    <div className='col s10'>
                        <form onSubmit={this.handleSubmitForm} >
                            <ProgressBar progress={process}/>
                            {this.currentStep()}
                        </form>
                    </div>
                    <div className='col s1 arrows'>                        
                        <div style={{margin:'auto'}} onClick={this.addStepHandler}><Icon>keyboard_arrow_right</Icon></div>
                    </div>
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
        filling: state.cakeReducer.cake.filling,
        customMessage: state.cakeReducer.cake.customMessage,
        flowers: state.cakeReducer.cake.flowers,
        ediblePearls: state.cakeReducer.cake.ediblePearls,
        strawberries: state.cakeReducer.cake.strawberries,
        candles: state.cakeReducer.cake.candles,
        fireworks: state.cakeReducer.cake.fireworks,
        message: state.cakeReducer.cake.message,
        selected: state.cakeReducer.cake.selected,
        noDecoration: state.cakeReducer.cake.noDecoration,
        progress: state.cakeReducer.cake.progress,
        frosting: state.cakeReducer.cake.frosting,
        spange: state.cakeReducer.cake.spange,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeValueHandler: (name, value) => dispatch (actions.changeValueHandler(name, value)),
        changeNoDecorationHandler: (name, value) => dispatch (actions.changeNoDecorationHandler(name, value))
    }
}    
export default connect(mapStateToProps,mapDispatchToProps)(Form);
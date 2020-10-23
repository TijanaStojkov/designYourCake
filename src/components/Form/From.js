import React, {Component} from 'react';
import './Form.scss';

//components
import Aux from '../../hoc/Auxilary/Auxilary';
import Step1 from './Steps/Step1/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Summary from './Steps/Summary/Summary';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Button } from 'react-materialize';

class Form extends Component{
    state = {
        step: 1,
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
                return <Step1 key={1}/>
            case 2:
                return <Step2 key={2}/>
            case 3:
                return <Step3 key={3}/>
            case 4:
                return <Summary/>
            default:
                return <Step1 key={1}/>
        }
    }
    render() {
        return(
            <Aux >
                
                <form onSubmit={this.handleSubmitForm}>
                    <ProgressBar/>
                    {this.currentStep()}
                </form>
                <Button className='brown darken-4 btn-prev' onClick={this.removeStepHandler}>Previous</Button>
                <Button className='brown darken-4 btn-next' onClick={this.addStepHandler} >Next</Button>

            </Aux>
        )
    }
}
export default Form;
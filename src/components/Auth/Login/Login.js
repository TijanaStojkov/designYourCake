import React, {Component} from 'react';
import './Login.scss';

//redux
import  {connect} from 'react-redux';
import * as actions from '../../../store/actions/allActions';

//components
import Messages from '../../Messages/Messages';

class Login extends Component {
    state = {
        email: '',
        password: '',
        isLogin: true,
        valid: false,
    }
    emailRef = React.createRef();
    passwordRef = React.createRef();

    valueChangedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },this.enableButton(e.target.name, e.target.value))
    }
    enableButton = () => {
        let valid = true
            valid = this.emailRef.current.classList.contains('valid') && valid
            valid = this.state.password.length>=6 && valid
            this.setState({
                valid: valid
            })
    }
    submitFormHandler = (e) => {
        e.preventDefault();
            this.props.auth(this.state.email, this.state.password);
    }
    changeLoginStatusHandler = () => {  
        this.setState(prevState => {
            return{
                isLogin: !prevState.isLogin,
            }
        })
    }
    
    render(){
        const disabled = this.state.valid?'disabled':null;
        let passwordMessage = this.state.password.length<6?
        <Messages text={'Your password must be at least 6 characters long.'} message={'error'}/>:null;

        let authMessage = null;
        switch(this.props.authMessage){
            case 'Request failed with status code 400':
                authMessage = <Messages text={'Email address allready exists.'} message={'error'}/>
                break;
            case 'You registered successfully.':
                authMessage = <Messages text={'You registered successfully.'} message={'success'}/>
                break;
            default:
                authMessage = null
    }
        return(
            <form onSubmit = {this.submitFormHandler}>
                <div id='login'>
                {authMessage}
                    <h3>{this.state.isLogin?'Login':'Register'}</h3>
                    <div className="input-field " >
                        <input id="email"  ref={this.emailRef} style={{height: '4rem'}} autoComplete="new-password" value={this.state.email} type="email" name="email" className="validate" onChange={(e)=>{this.valueChangedHandler(e)}}/>
                        <label >Email</label>
                    </div>
                    <div className="input-field " >
                        <input id="password"  ref={this.passwordRef} style={{height: '4rem'}} autoComplete="new-password" value={this.state.password} type="password" name="password" className={this.state.password.length>=6?'validate':'invalid'} onChange={(e)=>{this.valueChangedHandler(e)}}/>
                        <label >Password</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action" disabled={!this.state.valid}>Submit
                        <i className="material-icons right">send</i>
                    </button>
                   {passwordMessage}
                    <a onClick={this.changeLoginStatusHandler}>{this.state.isLogin?'You can register here':'You can login here'}</a>
                </div>
            </form>
            
        )
    }
}
const mapStateToProps = state => {
    return{
        authMessage: state.authReducer.authMessage
    }
}
const mapDispatchToProps = dispatch => {
    return{
        auth: (email,password) => dispatch(actions.auth(email,password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
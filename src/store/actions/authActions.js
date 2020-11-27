import * as actionTypes from './actionTypes';
import axios from 'axios';


/*export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}*/
 
    export const authSuccess = (success) => {
        return {
            type: actionTypes.AUTH_SUCCESS,
            success
        }
        
    }
    export const authFail = (error) => {
        return{
            type: actionTypes.AUTH_FAIL,
            error
        }
    }
    export const auth = (email, password) =>{
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        }
   
   
    return dispatch => {
        /*dispatch(authStart());*/
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGBTiqJJZbrf8kPL-PXvLwX7BMwIx1oVk', payload)
        .then(resp=> {
            console.log(resp.data);
            dispatch(authSuccess('You registered successfully.'))
        })
        .catch(error=>{
            dispatch(authFail(error.message))
        })
    }
}
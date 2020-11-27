import { updateObject } from '../../utility/updateObject';
import * as actionTypes from '../actions/actionTypes';

const initState = {
    authMessage: null,
    
}

const authReducer = (state=initState, actions) => {
    switch(actions.type){
        case actionTypes.AUTH_FAIL:
            return updateObject(state, {authMessage: actions.error})
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, {authMessage: actions.success})
        default:
            return state
    }
    
}

export default authReducer;
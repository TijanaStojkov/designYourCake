import { updateObject } from '../../utility/updateObject';
import * as actionTypes from '../actions/actionTypes';

const initState = {
    cake: {
        layers: ''
    }
}

const cakeReducer = (state=initState, actions) => {
    switch(actions.type){
        case actionTypes.CHANGE_LAYERS_HANDLER:
            return updateObject(state, {cake: updateObject(state.cake, {layers: actions.layers})})
        default:
            return state
    }
}
export default cakeReducer;
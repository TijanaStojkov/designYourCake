import { updateObject } from '../../utility/updateObject';
import * as actionTypes from '../actions/actionTypes';
import { LAYERS_PRICE } from '../../const/layers'

const initState = {
    cake: {
        layers: 'rectangular-one',
        layersPrice: 40,
        nesto:30
    },
    totalPrice: null
}

const cakeReducer = (state=initState, actions) => {
    switch(actions.type){
        case actionTypes.CHANGE_LAYERS_HANDLER:
            return updateObject(state, {cake: updateObject(state.cake, {layers: actions.layers, layersPrice: LAYERS_PRICE[actions.layers]})})
        default:
            return state
    }
}
export default cakeReducer;
import { updateObject } from '../../utility/updateObject';
import * as actionTypes from '../actions/actionTypes';
import { CAKE_PRICES } from '../../const/cake-prices'

const initState = {
    cake: {
        layers: 'rectangular-one',
        spange: 'spangeRed',
        icing: 'icingBlue',
        customMessage: false,
        flowers: false,
        ediblePearls: false,
        strawberries: false,
        candles: false,
        fireworks: false,
        message: 'null',
        selected:'rectangular'
    },
    totalPrice: 0
}

const cakeReducer = (state=initState, actions) => {
    switch(actions.type){
        case actionTypes.CHANGE_VALUE_HANDLER:
            const layerPrice = CAKE_PRICES[state.cake.layers];
            let customMessagePrice = 0;

            let cake = {...state.cake}
            for (var key in cake){
                if(state.cake[actions.name]===true){
                    console.log(key)
                }
            }
            if(state.cake.customMessage===true){
                customMessagePrice = CAKE_PRICES[actions.name];
            }else{
                customMessagePrice = 0
            }
            const totalPrice = layerPrice + customMessagePrice
            return updateObject(state, {cake: updateObject(state.cake, {[actions.name]: actions.value}), totalPrice: totalPrice})
        default:
            return state
    }
}
export default cakeReducer;
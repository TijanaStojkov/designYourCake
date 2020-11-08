import { updateObject } from '../../utility/updateObject';
import * as actionTypes from '../actions/actionTypes';
import { CAKE_PRICES } from '../../const/cake-prices'

const initState = {
    cake: {
        layers: 'rectangular-one',
        selected:'rectangular',
        spange: '',
        icing: '',
        filling: '',
        selectedDecoration: '',
        frosting: 'chocolate',
        noDecoration: false,
        customMessage: false,
        flowers: false,
        ediblePearls: false,
        strawberries: false,
        candles: false,
        fireworks: false,
        message: '',
        progress: 0,
    },
    totalPrice: 0
}
const cakeReducer = (state=initState, actions) => {
    switch(actions.type){
        case actionTypes.CHANGE_VALUE_HANDLER:
            console.log(actions.name, actions.value)
            const layerPrice = CAKE_PRICES[state.cake.layers];
            let customMessagePrice = 0;
            if(state.cake.customMessage===true){
                customMessagePrice = CAKE_PRICES[actions.name];
            }else{
                customMessagePrice = 0
            }
            const totalPrice = layerPrice + customMessagePrice
            return updateObject(state, {cake: updateObject(state.cake, {[actions.name]: actions.value}), totalPrice: totalPrice})

        case actionTypes.CHANGE_NO_DECORATION_HANDLER:
                if(actions.value===true){
                    return updateObject(state, {cake: updateObject(state.cake, 
                    {   [actions.name]: actions.value,
                        customMessage: false,
                        flowers: false,
                        ediblePearls: false,
                        strawberries: false,
                        candles: false,
                        fireworks: false,
                        message: '' }
                        )})
                }else{
                    return updateObject(state, {cake: updateObject(state.cake, 
                        { [actions.name]: actions.value }
                    )})   
                }        
            default:
            return state
    }
}
export default cakeReducer;
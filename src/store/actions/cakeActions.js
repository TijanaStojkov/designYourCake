import * as actionTypes from './actionTypes';

export const changeLayersHandler = (layers) => {
    return {
        type: actionTypes.CHANGE_LAYERS_HANDLER,
        layers
    }
}
export const changeSpangeHandler = (spange) => {
    return{
        type: actionTypes.CHANGE_SPANGE_HANDLER,
        spange
    }
}
export const changeIcingHandler = (icing) => {
    return{
        type: actionTypes.CHANGE_ICING_HANDLER,
        icing
    }
}
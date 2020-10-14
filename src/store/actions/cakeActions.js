import * as actionTypes from './actionTypes';

export const changeLayersHandler = (layers) => {
    return {
        type: actionTypes.CHANGE_LAYERS_HANDLER,
        layers: layers
    }
}
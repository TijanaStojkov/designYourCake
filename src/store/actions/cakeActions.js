import * as actionTypes from './actionTypes';

export const changeValueHandler = (name, value) => {
    return {
        type: actionTypes.CHANGE_VALUE_HANDLER,
        name,
        value
    }
}
export const changeNoDecorationHandler = (name, value) => {
    return{
        type: actionTypes.CHANGE_NO_DECORATION_HANDLER,
        name,
        value
    }
}
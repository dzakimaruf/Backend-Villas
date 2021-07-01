import {
    ORDER_INPUT_REQUEST,
    ORDER_INPUT_SUCCESS,
    ORDER_INPUT_FAIL,
    ORDER_FINDONE_REQUEST,
    ORDER_FINDONE_SUCCESS,
    ORDER_FINDONE_FAIL,
    ORDER_FINDALL_REQUEST,
    ORDER_FINDALL_SUCCESS,
    ORDER_FINDALL_FAIL,
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL
} from '../constants/OrderConst'

export const orderReducer = (state = {}, action) => {
    switch(action.type){
        case ORDER_INPUT_REQUEST:
            return {loading:true}
        case ORDER_INPUT_SUCCESS: 
            return {loading:true, order:action.payload}
        case ORDER_INPUT_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}
export const orderOneReducer = (state = {}, action) => {
    switch(action.type){
        case ORDER_FINDONE_REQUEST:
            return {loading:true}
        case ORDER_FINDONE_SUCCESS: 
            return {loading:true, ord:action.payload}
        case ORDER_FINDONE_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}
export const findAllOrderReducer = (state = {}, action) => {
    switch(action.type){
        case ORDER_FINDALL_REQUEST:
            return {loading:true}
        case ORDER_FINDALL_SUCCESS: 
            return {loading:true, orderall:action.payload}
        case ORDER_FINDALL_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}
export const orderUpdateReducer = (state = {}, action) => {
    switch(action.type){
        case ORDER_UPDATE_REQUEST:
            return {loading:true}
        case ORDER_UPDATE_SUCCESS: 
            return {loading:true, ordupdate:action.payload}
        case ORDER_UPDATE_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}
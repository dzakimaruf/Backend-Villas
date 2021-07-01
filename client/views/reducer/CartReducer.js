import {
    CART_LISTONE_REQUEST,
    CART_LISTONE_SUCCESS,
    CART_LISTONE_FAIL
} from '../constants/CartConst'

export const cartListOneReducer = (state = {}, action) => {
    switch(action.type){
        case CART_LISTONE_REQUEST:
            return {loading:true}
        case CART_LISTONE_SUCCESS: 
            return {loading:true, cart:action.payload}
        case CART_LISTONE_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}
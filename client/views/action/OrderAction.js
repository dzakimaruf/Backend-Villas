import axios from 'axios'
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
    ORDER_UPDATE_FAIL,
} from "../constants/OrderConst"

export const orderInput = (lite) => async (dispatch) => {
    dispatch ({ type: ORDER_INPUT_REQUEST, payload: lite });

    try {
        const { data } = await axios.post('/api/lite/order/', lite);
        dispatch ({ type: ORDER_INPUT_SUCCESS, payload: data })
    } catch (error) {
        dispatch ({
            type: ORDER_INPUT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}
export const  orderOne = (id) => async (dispatch) => {
    dispatch({
        type: ORDER_FINDONE_REQUEST
    })
    try {
        const { data } = await axios.get(`/api/lite/order/${id}`)
        dispatch({
            type: ORDER_FINDONE_SUCCESS, payload: data
        })
    } catch (error) {
        dispatch({
            type: ORDER_FINDONE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}
export const  findAllOrder = (id) => async (dispatch) => {
    dispatch({
        type: ORDER_FINDALL_REQUEST
    })
    try {
        const { data } = await axios.get(`/api/lite/findone/order/${id}`)
        dispatch({
            type: ORDER_FINDALL_SUCCESS, payload: data
        })
    } catch (error) {
        dispatch({
            type: ORDER_FINDALL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}


export const orderUpdate = (upd) => async (dispatch) => {
    dispatch({type: ORDER_UPDATE_REQUEST, payload:upd})

    try {
        const {data} = await axios.put(`/api/lite/ordered/${upd.user_id}`, upd)
        dispatch({type: ORDER_UPDATE_SUCCESS, payload:data})
    } catch (error) {
        dispatch({
        type: ORDER_UPDATE_FAIL,
        payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            })
    }
}
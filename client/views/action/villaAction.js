import axios from "axios"
import {
    VILLA_FIND_REQUEST,
    VILLA_FIND_SUCCESS,
    VILLA_FIND_FAIL,
    VILLA_FINDONE_REQUEST,
    VILLA_FINDONE_SUCCESS,
    VILLA_FINDONE_FAIL

} from "../constants/villaConstants"

export const listVilla = () => async (dispatch) => {
    dispatch({
        type: VILLA_FIND_REQUEST
    })
    try {
        const data = await axios.get("/api/villa/")
        dispatch({
            type: VILLA_FIND_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: VILLA_FIND_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listOneVilla = (id) => async (dispatch) => {
    dispatch({
        type: VILLA_FINDONE_REQUEST
    })
    try {
        const { data } = await axios.get(`/api/villa/${id}`)
        dispatch({
            type: VILLA_FINDONE_SUCCESS, payload: data
        })
    } catch (error) {
        dispatch({
            type: VILLA_FINDONE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}

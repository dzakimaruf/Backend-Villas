import axios from 'axios'
import {
    LINE_INPUT_REQUEST,
    LINE_INPUT_SUCCESS,
    LINE_INPUT_FAIL
} from "../constants/LineItems"

export const liteInput = (lite) => async (dispatch) => {
    dispatch ({ type: LINE_INPUT_REQUEST, payload: lite });

    try {
        const { data } = await axios.post(`/api/lite/cart/${lite.user_id}`, lite);
        dispatch ({ type: LINE_INPUT_SUCCESS, payload: data })
    } catch (error) {
        dispatch ({
            type: LINE_INPUT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}
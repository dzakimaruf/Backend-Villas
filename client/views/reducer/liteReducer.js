import {
    LINE_INPUT_REQUEST,
    LINE_INPUT_SUCCESS,
    LINE_INPUT_FAIL
} from "../constants/LineItems"

export const liteCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case LINE_INPUT_REQUEST:
            return { loading: true};
        case LINE_INPUT_SUCCESS:
            return { loading: false, liteRegis: action.payload };
        case LINE_INPUT_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }

}
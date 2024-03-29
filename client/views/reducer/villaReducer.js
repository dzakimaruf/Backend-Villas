import {
    VILLA_FIND_REQUEST,
    VILLA_FIND_SUCCESS,
    VILLA_FIND_FAIL,
    VILLA_FINDONE_REQUEST,
    VILLA_FINDONE_SUCCESS,
    VILLA_FINDONE_FAIL,
    VILLA_SEARCH_REQUEST,
    VILLA_SEARCH_SUCCESS,
    VILLA_SEARCH_FAIL,
    VILLA_FASILITAS_REQUEST,
    VILLA_FASILITAS_SUCCESS,
    VILLA_FASILITAS_FAIL

} from '../constants/villaConstants'

export const villaListReducer = (state = {}, action) => {
    switch (action.type) {
        case VILLA_FIND_REQUEST:
            return { loading: true }
        case VILLA_FIND_SUCCESS:
            return { loading: true, villa: action.payload.data }
        case VILLA_FIND_FAIL:
            return { loading: false, error: action.payload }
        case VILLA_SEARCH_REQUEST:
            return { loading: true }
        case VILLA_SEARCH_SUCCESS:
            return { loading: false, searching: action.payload }
        case VILLA_SEARCH_FAIL:
            return { loading: false, error: action.payload }
        case VILLA_FASILITAS_REQUEST:
            return { loading: true }
        case VILLA_FASILITAS_SUCCESS:
            return { loading: false, fasilitas: action.payload }
        case VILLA_FASILITAS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const villaOneReducer = (state = {}, action) => {
    switch (action.type) {
        case VILLA_FINDONE_REQUEST:
            return { loading: true }
        case VILLA_FINDONE_SUCCESS:
            return { loading: true, villa: action.payload }
        case VILLA_FINDONE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
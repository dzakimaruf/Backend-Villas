import axios from "axios"
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

export const searchVilla = (villname) => async (dispatch) => {
    dispatch ({type : VILLA_SEARCH_REQUEST});
    console.log(villname)
    try {
      const {data} = await axios.get(`/api/villa/search/villa?villa_title=${villname}`);
      
      dispatch({ 
        type : VILLA_SEARCH_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch ({
        type: VILLA_SEARCH_FAIL,
        payload:
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }

  export const searchFasilitas = (villname) => async (dispatch) => {
    dispatch ({type : VILLA_FASILITAS_REQUEST});
    console.log(villname)
    try {
      const {data} = await axios.get(`/api/villa/search/fasilitas?villa_fasilitas=${villname}`);
      
      dispatch({ 
        type : VILLA_FASILITAS_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch ({
        type: VILLA_FASILITAS_FAIL,
        payload:
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
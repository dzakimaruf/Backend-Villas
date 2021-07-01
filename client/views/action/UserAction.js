import axios from 'axios'
import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_FINDONE_REQUEST,
    USER_FINDONE_SUCCESS,
    USER_FINDONE_FAIL

} from '../constants/UserConst'

export const signinUser = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    const user = {
      user_email: email,
      user_password: password,
    }; 
    try {
      const { data }  = await axios.post("/api/user/signin", user);
      console.log(data)
      dispatch({ type: USER_SIGNIN_SUCCESS, 
      payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const signout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_SIGNOUT });
  };


export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: {user}});

  try {
    const { data } = await axios.post("/api/users/signup/", user);
    dispatch({ type: USER_REGISTER_SUCCESS,
    payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    })
  }
}
export const userOne = (id) => async (dispatch) => {
  dispatch({
      type: USER_FINDONE_REQUEST
  })
  try {
      const { data } = await axios.get(`/api/user/checkuser/${id}`)
      dispatch({
          type: USER_FINDONE_SUCCESS, payload: data
      })
  } catch (error) {
      dispatch({
          type: USER_FINDONE_FAIL,
          payload: error.response && error.response.data.message
              ? error.response.data.message : error.message
      })
  }
}
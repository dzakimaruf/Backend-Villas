import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_FINDONE_REQUEST,
    USER_FINDONE_SUCCESS,
    USER_FINDONE_FAIL
    
} from '../constants/UserConst'

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload, };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };

  export const userRegisterReducer = (state = {}, action ) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return {loading: true};
      case USER_REGISTER_SUCCESS:
      return {loading: false, register: action.payload};
       case USER_REGISTER_FAIL:
         return {loading: false, error: action.payload};
      default:
        return state;
    }
  };

  export const userOneReducer = (state = {}, action ) => {
    switch (action.type) {
      case USER_FINDONE_REQUEST:
        return {loading: true};
      case USER_FINDONE_SUCCESS:
      return {loading: false, finduser: action.payload};
       case USER_FINDONE_FAIL:
         return {loading: false, error: action.payload};
      default:
        return state;
    }
  };
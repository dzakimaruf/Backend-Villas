import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { villaListReducer, villaOneReducer } from './reducer/villaReducer'
import { liteCreateReducer } from "./reducer/liteReducer";
import { listOneCart } from "./reducer/CartReducer";
import { userSigninReducer } from "./reducer/UserReducer";

const initialState = {

  userSignin: {
    userInfo:
      typeof window === "object"
        ? localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : null
        : null,
  }
};
const reducer = combineReducers({
  villaList: villaListReducer,
  liteCreate: liteCreateReducer,
  CartOne: listOneCart,
  villaOne: villaOneReducer,
  userSignin: userSigninReducer, 
});


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { villaListReducer, villaOneReducer } from './reducer/villaReducer'
import { liteCreateReducer } from "./reducer/liteReducer";
import { cartListOneReducer } from "./reducer/CartReducer";
import { userOneReducer, userSigninReducer } from "./reducer/UserReducer";
import { findAllOrderReducer, orderOneReducer, orderReducer, orderUpdateReducer } from "./reducer/OrderReducer";


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
  CartOne: cartListOneReducer,
  villaOne: villaOneReducer,
  userSignin: userSigninReducer, 
  orderCheck: orderReducer,
  orderOneCheck: orderOneReducer,
  orderUp: orderUpdateReducer,
  orderAll:  findAllOrderReducer,
  findUser: userOneReducer
});


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
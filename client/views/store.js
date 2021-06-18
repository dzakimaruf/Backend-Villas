import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {villaListReducer} from './reducer/villaReducer'
import {villaOneReducer} from './reducer/villaReducer'

const initialState = {
  
};
const reducer = combineReducers({
villaList:villaListReducer,
//villaOne:villaOneReducer
});


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
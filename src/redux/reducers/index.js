import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import {allDataReducer} from './productsReducer'
const reducers = combineReducers({
  allProducts: productsReducer,
  allDataReducer:allDataReducer,
});
export default reducers;

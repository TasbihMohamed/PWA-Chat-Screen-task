import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const setAllData = (data) => {
  return {
    type: ActionTypes.SET_Data,
    payload: data,
  };
};




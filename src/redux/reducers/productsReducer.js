import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  data: {},
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

//
export const allDataReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_Data:
      return { ...state, data: payload };
    default:
      return state;
  }
};

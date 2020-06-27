import { FETCH_CATEGORIES } from "../actions/type";

let initialState = [];

export default (state = initialState, {type, action}) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return {...state};
    default:
      return state;
  }
};

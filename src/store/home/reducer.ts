import * as actionTypes from "./constants";
const initialState = {
  count: 0,
};
export default function counterReducer(state = initialState, action: { type: string; num: number}) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return {
        ...state,
        count: state.count + action.num,
      };
    case actionTypes.SUB_NUMBER:
      return {
        ...state,
        count: state.count - action.num,
      };
    default:
      return state;
  }
  return state;
}

import * as actionTypes from "./constants";
export const addNumberAction = (num: number) => ({ type: actionTypes.ADD_NUMBER, num });
export const subNumberAction = (num: number) => ({ type: actionTypes.SUB_NUMBER, num } as const);
export const ADD_ARTICLE = "ADD_ARTICLE";
import { setInt1 } from "./../actions/action";
import { setInt2_payload } from "./constants";
export const SET_INT1 = "SET_INT1";
export const SET_INT2 = "SET_INT2";
export const SET_OPERATOR = "SET_OPERATOR";
export const SET_INT1CHECK = "SET_INT1CHECK";
export const SET_INT2CHECK = "SET_INT2CHECK";
export const CALCULATE = "CALCULATE";
export const SETDOT1 = "SETDOT1";
export const SETDOT2 = "SETDOT2";
export const SETINT1NEG = "SETINT1NEG";
export const SETINT2NEG = "SETINT2NEG";
export const SETINT1NEG_DOT_VALUE = "SETINT1NEG_DOT_VALUE";
export const SETINT2NEG_DOT_VALUE = "SETINT2NEG_DOT_VALUE";
export const RESET = "RESET";
export const SET_AGAIN_VALUES = "SET_AGAIN_VALUES";
export const BTN1 = "BTN1";
export const BTN2 = "BTN2";
export const BTN3 = "BTN3";
export const BTN4 = "BTN4";
export const SHOW = "SHOW";

export interface initialState {
  integer1: number;
  integer2: number;
  operator: string;
  int1_check: boolean;
  int2_check: boolean;
  int2_value_check: boolean;
  int1_dot: boolean;
  int2_dot: boolean;
  int1_divide: number;
  int2_divide: number;
  screen: string;
  number: number;
  result: Array<string>;
  int1_neg: boolean;
  int2_neg: boolean;
  int2_dot_val_check: boolean;
  zero: string;
  again_operator: string;
  again_calculate: number;
  btn1: boolean;
  btn2: boolean;
  btn3: boolean;
  btn4: boolean;
  active: string;
  nonActive: string;
}

export interface setInt1_payload {
  int1Updated: number;
  screen: string;
  int1_check: boolean;
}
export interface setInt2_payload {
  int2Updated: number;
  screen: string;
  int2_value_check: boolean;
}
export interface setInt1NegDotValue_payload {
  int1_dot_updated: number;
  screen: string;
  int1_check: boolean;
}
export interface data {
  int1: number;
  int2: number;
  operator: string;
}
export interface data2 {
  operator: string;
  int: number;
}
export interface setInt1_type {
  type: typeof SET_INT1;
  payload: setInt1_payload;
}
export interface setInt2_type {
  type: typeof SET_INT2;
  payload: setInt1_payload;
}
export interface operator_type {
  type: typeof SET_OPERATOR;
  payload: string;
}
export interface setInt1Check_type {
  type: typeof SET_INT1CHECK;
  payload: boolean;
}
export interface setInt2Check_type {
  type: typeof SET_INT2CHECK;
  payload: boolean;
}
export interface calulateValues_type {
  type: typeof CALCULATE;
  payload: data;
}
export interface setInt1Dot_type {
  type: typeof SETDOT1;
  payload: boolean;
}
export interface setInt2Dot_type {
  type: typeof SETDOT2;
  payload: boolean;
}
export interface setInt1Neg_type {
  type: typeof SETINT1NEG;
  payload: neg_payload;
}
export interface setInt2Neg_type {
  type: typeof SETINT2NEG;
  payload: neg_payload;
}
export interface setInt1NegDotValue_type {
  type: typeof SETINT1NEG_DOT_VALUE;
  payload: setInt1NegDotValue_payload;
}
export interface setInt2NegDotValue_type {
  type: typeof SETINT2NEG_DOT_VALUE;
  payload: setInt2NegDotValue_payload;
}
export interface resetValues_type {
  type: typeof RESET;
}
export interface setAgainValues_type {
  type: typeof SET_AGAIN_VALUES;
  payload: data2;
}
export interface set_btn1_type {
  type: typeof BTN1;
}

export type actionTypes =
  | setInt1_type
  | setInt2_type
  | operator_type
  | setInt1Check_type
  | setInt2Check_type
  | calulateValues_type
  | setInt1Dot_type
  | setInt2Dot_type
  | setInt1Neg_type
  | setInt2Neg_type
  | setInt1NegDotValue_type
  | setInt2NegDotValue_type
  | resetValues_type
  | setAgainValues_type
  | set_btn1_type;
export interface setInt2NegDotValue_payload {
  int1_dot_updated: number;
  screen: string;
  int2_value_check: boolean;
}
export interface neg_payload {
  neg_check: boolean;
  int: number;
  screen: number | string;
}

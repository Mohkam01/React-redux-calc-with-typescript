import {
  ADD_ARTICLE,
  SET_OPERATOR,
  SET_INT1,
  SET_INT2,
  SET_INT1CHECK,
  SET_INT2CHECK,
  CALCULATE,
  SETDOT2,
  SETDOT1,
  SETINT1NEG,
  SETINT2NEG,
  SETINT1NEG_DOT_VALUE,
  SETINT2NEG_DOT_VALUE,
  RESET,
  SET_AGAIN_VALUES,
  BTN1,
  BTN2,
  BTN3,
  BTN4,
  setInt1_payload,
  setInt2_payload,
  data,
  data2,
  setInt2NegDotValue_payload,
  setInt1NegDotValue_payload,
  neg_payload
} from "../constants/constants";
import Calculation from "./../../utils/Calculation";
export function setInt1(payload: setInt1_payload) {
  //   console.log("in action");
  //   console.log(payload);
  return { type: SET_INT1, payload };
}
export function setInt2(payload: setInt2_payload) {
  //   console.log("in action");
  //   console.log(payload);
  return { type: SET_INT2, payload };
}
export function setOperator(payload: string) {
  console.log("in action");
  console.log(payload);
  return { type: SET_OPERATOR, payload };
}
export function setInt1Check(payload: boolean) {
  console.log(payload);
  return { type: SET_INT1CHECK, payload };
}
export function setInt2Check(payload: boolean) {
  console.log(payload);
  return { type: SET_INT2CHECK, payload };
}
export function calulateValues(data: data) {
  console.log("in calculate action");
  var payload = Calculation(data);
  console.log(payload);
  return { type: CALCULATE, payload };
}
export function setInt1Dot(payload: boolean) {
  return { type: SETDOT1, payload };
}
export function setInt2Dot(payload: boolean) {
  return { type: SETDOT2, payload };
}
export function setInt1Neg(payload: neg_payload) {
  return { type: SETINT1NEG, payload };
}
export function setInt2Neg(payload: neg_payload) {
  return { type: SETINT2NEG, payload };
}
export function setInt1NegDotValue(payload: setInt1NegDotValue_payload) {
  return { type: SETINT1NEG_DOT_VALUE, payload };
}
export function setInt2NegDotValue(payload: setInt2NegDotValue_payload) {
  return { type: SETINT2NEG_DOT_VALUE, payload };
}
export function resetValues() {
  return { type: RESET };
}
export function setAgainValues(payload: data2) {
  return { type: SET_AGAIN_VALUES, payload };
}
export function set_btn1() {
  return { type: BTN1 };
}
export function set_btn2() {
  return { type: BTN2 };
}
export function set_btn3() {
  return { type: BTN3 };
}
export function set_btn4() {
  return { type: BTN4 };
}

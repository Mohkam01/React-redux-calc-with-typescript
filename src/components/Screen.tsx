import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import Result from "./files/Result";
import Operation from "./files/Operation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Digit from "./files/Digit";
import "./Style.css";

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
  neg_payload,
  setInt1_payload,
  initialState,
  actionTypes,
  setInt2_payload,
  data,
  data2,
  setInt1NegDotValue_payload,
  setInt2NegDotValue_payload,
  setInt1_type
} from "./redux-js/constants/constants";
import {
  setOperator,
  setInt1,
  setInt2,
  setInt1Check,
  setInt2Check,
  calulateValues,
  setInt1Dot,
  setInt2Dot,
  setInt1Neg,
  setInt2Neg,
  setInt1NegDotValue,
  setInt2NegDotValue,
  resetValues,
  setAgainValues,
  set_btn1,
  set_btn2,
  set_btn3,
  set_btn4
} from "./redux-js/actions/action";

export interface ScreenProps {
  int1?: number;
  int2?: number;
  operator?: string;
  int1_check?: boolean;
  int2_check?: boolean;
  int2_value_check?: boolean;
  int1_dot?: boolean;
  int2_dot?: boolean;
  int1_divide?: number;
  int2_divide?: number;
  screen?: string;
  number?: number;
  result?: [];
  int1_neg?: boolean;
  int2_neg?: boolean;
  int2_dot_val_check?: boolean;
  zero?: string;
  again_operator?: string;
  again_calculate?: number;
  btn1?: boolean;
  btn2?: boolean;
  btn3?: boolean;
  btn4?: boolean;
  active?: string;
  nonActive?: string;
  setInt1?: actionTypes.setInt1_type;
  setInt1NegDotValue?: actionTypes.setInt1NegDotValue_type;
  setInt2?: actionTypes.setInt2_type;
  setInt2NegDotValue?: actionTypes.setInt2NegDotValue_type;
  setInt2Check?: actionTypes.setInt2Check_type;
  calulateValues?: actionTypes.calulateValues_type;
}
// export interface SreenState {
//   integer1: number;
// }
class Screen extends React.Component<ScreenProps, {}> {
  // state = { :  }
  constructor(props: ScreenProps) {
    super(props);
  }
  set = (number: number) => {
    console.log("i am clicked");
    var screen: string | number = "";
    if (this.props.int2_check === false) {
      var int1_check: boolean = true;
      // console.log("in int1");
      if (this.props.int1_dot === true) {
        const int1_dot_val = number / this.props.int1_divide;
        console.log(int1_dot_val);
        // ---------------------------------------------------------------------
        var int1_dot_updated = 0;
        if (this.props.int1_neg === true) {
          // console.log("in true");
          int1_dot_updated = this.props.int1 - int1_dot_val;
          // console.log(int1_dot_updated);
        } else {
          int1_dot_updated = this.props.int1 + int1_dot_val;
          console.log(int1_dot_updated);
        }
        // ---------------------------------------------------------------------
        // var int1 = int1_dot_updat
        // screen = this.props.screen.toString() + number;
        // console.log(int1_dot_updated);
        screen = this.props.screen + number;
        this.props.setInt1NegDotValue({ int1_dot_updated, screen, int1_check });
      } else {
        var int1Updated = 0;
        if (this.props.int1_neg === true) {
          int1Updated = this.props.int1 * 10 - number;
        } else {
          int1Updated = this.props.int1 * 10 + number;
        }

        screen = int1Updated;
        this.props.setInt1({ int1Updated, screen, int1_check });
      }
    } else {
      var int2_value_check = true;
      if (this.props.int2_dot === true) {
        const int2_dot_val = number / this.props.int2_divide;
        console.log(int2_dot_val);
        parseFloat(int2_dot_val);
        // ---------------------------------------------------------------------
        var int2_dot_updated = 0;
        if (this.props.int2_neg === true) {
          // console.log("in true");
          int2_dot_updated = this.props.int2 - int2_dot_val;
          // console.log(int2_dot_updated);
        } else {
          int2_dot_updated = this.props.int2 + int2_dot_val;
        }
        parseFloat(int2_dot_updated);
        screen = this.props.screen + number;
        // ---------------------------------------------------------------------
        // var int1 = int1_dot_updat
        // screen = this.props.screen.toString() + number;
        console.log(int2_dot_updated);
        this.props.setInt2NegDotValue({
          int2_dot_updated,
          screen,
          int2_value_check
        });
      } else {
        var int2Updated: number = 0;
        if (this.props.int2_neg === true) {
          int2Updated = this.props.int2 * 10 - number;
        } else {
          int2Updated = this.props.int2 * 10 + number;
        }
        // console.log("in int2");
        // const int2 = this.props.int2 * 10 + number;
        screen = int2Updated;
        // console.log(int2Updated);
        this.props.setInt2({ int2Updated, screen, int2_value_check });
      }
    }
  };
  operation = (oprt: string) => {
    console.log("i am in operation");
    const check: boolean = true;
    // console.log("i am operator");
    // console.log(oprt);
    if (this.props.int1_check === false) {
      document.getElementById("screen").innerHTML =
        "kindly enter any number first";
    } else if (this.props.int1_check === true && oprt === "%") {
      this.props.setInt2Check(check);
      // this.props.setOperator(oprt);
      // console.log("here");
      // console.log(this.props.operator);
      var data = {
        int1: this.props.int1,
        int2: this.props.int2,
        operator: oprt
      };
      console.log(data);

      this.colorChange(oprt);
      this.props.calulateValues(data);
    } else if (
      this.props.int1_check === true &&
      this.props.int2_value_check === true &&
      this.props.operator !== ""
    ) {
      var operation = oprt;
      var data2 = {
        operator: this.props.operator,
        int: this.props.int2
      };
      this.props.setAgainValues(data2);
      this.colorChange(oprt);
      this.calculate();
      this.props.setOperator(operation);
    } else {
      this.props.setInt2Check(check);
      this.colorChange(oprt);
      this.props.setOperator(oprt);
    }
  };
  calculate = () => {
    console.log("i am in calculate");
    var data = null;
    var data2 = null;
    var operation;
    if (
      this.props.int1_check === true &&
      this.props.int2_value_check === false &&
      this.props.again_operator !== ""
    ) {
      data = {
        int1: this.props.int1,
        int2: this.props.again_calculate,
        operator: this.props.again_operator
      };
      this.props.calulateValues(data);
    } else if (
      this.props.int2_value_check === false &&
      this.props.operator !== ""
    ) {
      operation = this.props.operator;
      data = {
        int1: this.props.int1,
        int2: this.props.int1,
        operator: this.props.operator
      };
      data2 = {
        operator: this.props.operator,
        int: this.props.int1
      };
      this.props.setAgainValues(data2);
      // console.log("i am printing again");
      // console.log(data2);
      this.props.calulateValues(data);
      // console.log("i am here");
      // console.log(operation);
      this.props.setOperator(operation);
    }
    // else if(this.props.int2_check === false && this.props.again_operator!== ""){

    // }
    else {
      data = {
        int1: this.props.int1,
        int2: this.props.int2,
        operator: this.props.operator
      };
    }
    this.props.calulateValues(data);
  };

  show = () => {
    console.log(" i am in show");
    if (this.props.result.length === 0) {
      document.getElementById("screen").innerHTML = "you memory is empty";
    } else {
      document.getElementById("screen").innerHTML = this.props.result;
    }
  };
  dot = () => {
    console.log("i am in dot");
    var screen = "";
    var dot_check = false;
    if (this.props.int1_dot === false && this.props.int2_check === false) {
      dot_check = true;
      this.props.setInt1Dot(dot_check);
    } else if (
      this.props.int2_dot === false &&
      this.props.int2_check === true
    ) {
      if (this.props.int2_check === true) {
        var int2Updated: number = this.props.int2;
        var screen: number = this.props.int2;
        var int2_value_check = true;
        this.props.setInt2({ int2Updated, screen, int2_value_check });
      }
      dot_check = true;
      this.props.setInt2Dot(dot_check);
    }
  };
  reset = () => {
    console.log("in reset");
    this.props.resetValues();
    document.getElementById("screen").innerHTML =
      "output screen for errors or memory";
  };
  colorChange = (oprt) => {
    console.log("in change color");
    if (oprt === "/") {
      this.props.set_btn1();
    } else if (oprt === "x") {
      this.props.set_btn2();
    } else if (oprt === "-") {
      this.props.set_btn3();
    } else if (oprt === "+") {
      this.props.set_btn4();
    }
  };
  negate = () => {
    console.log("i am in negate");
    var neg = 0;
    var int = 0;
    var screen = 0;
    var neg_check = false;
    if (this.props.int2_check === false) {
      neg = this.props.int1 * -1;
      console.log(neg);
      int = neg;
      screen = neg;
      neg_check = !this.props.int1_neg;
      this.props.setInt1Neg({ neg_check, int, screen });
    } else {
      neg = this.props.int2 * -1;
      int = neg;
      screen = neg;
      neg_check = !this.props.int2_neg;
      this.props.setInt2Neg({ neg_check, int, screen });
    }
  };
  render() {
    return (
      <React.Fragment>
        <p className="col-md-5">{this.props.result}</p>
        <div className="row error-screen">
          <p id="screen" className="col-md-5">
            "output screen for errors or memory"
          </p>
        </div>
        <div className="container main-screen">
          <div className="screen">
            <Result />
          </div>
          <div className="no-outline">
            <button
              className="btn btn-secondary cal-btn upper-btn btn-ac"
              onClick={this.reset}
            >
              AC
            </button>
            <button
              className="btn btn-secondary cal-btn upper-btn btn-minus"
              onClick={this.negate}
            >
              +/-
            </button>
            <Operation
              class="btn btn-secondary upper-btn cal-btn"
              onClick={this.operation}
              oprt="%"
            />
            <Operation
              // class="btn btn-secondary upper-btn cal-btn" // remove this class after managing props
              class={
                this.props.btn1 === true
                  ? this.props.active
                  : this.props.nonActive
              }
              onClick={this.operation}
              oprt="/"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={7}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={8}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={9}
            />
            <Operation
              // class="btn btn-secondary upper-btn cal-btn" // remove this class after managing props
              class={
                this.props.btn2 === true
                  ? this.props.active
                  : this.props.nonActive
              }
              onClick={this.operation}
              oprt="x"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={4}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={5}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={6}
            />
            <Operation
              // class="btn btn-secondary upper-btn cal-btn" // remove this class after managing props
              class={
                this.props.btn3 === true
                  ? this.props.active
                  : this.props.nonActive
              }
              onClick={this.operation}
              oprt="-"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={1}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={2}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={3}
            />
            <Operation
              // class="btn btn-secondary upper-btn cal-btn" // remove this class after managing props
              class={
                this.props.btn4 === true
                  ? this.props.active
                  : this.props.nonActive
              }
              onClick={this.operation}
              oprt="+"
            />
          </div>
          <div className="no-outline">
            <button
              className="btn btn-secondary cal-btn clr2"
              onClick={this.show}
            >
              M
            </button>
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={0}
            />
            <button
              className="btn btn-secondary cal-btn clr2"
              onClick={this.dot}
            >
              .
            </button>
            <button
              className="btn btn-secondary cal-btn clr"
              onClick={this.calculate}
            >
              =
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
function mapDispatchToProps(dispatch: Dispatch) {
  console.log("in dispatch");
  return {
    setInt1: (Payload: setInt1_payload) => dispatch(setInt1(Payload)),
    setInt2: (Payload: setInt2_payload) => dispatch(setInt2(Payload)),
    setOperator: (oprt: string) => dispatch(setOperator(oprt)),
    setInt1Check: (check: boolean) => dispatch(setInt1Check(check)),
    setInt2Check: (check: boolean) => dispatch(setInt2Check(check)),
    calulateValues: (data: data) => dispatch(calulateValues(data)),
    setInt1Dot: (dot_check: boolean) => dispatch(setInt1Dot(dot_check)),
    setInt2Dot: (dot_check: boolean) => dispatch(setInt2Dot(dot_check)),
    setInt1Neg: (payload: neg_payload) => dispatch(setInt1Neg(payload)),
    setInt2Neg: (payload: neg_payload) => dispatch(setInt2Neg(payload)),
    setInt1NegDotValue: (payload: setInt1NegDotValue_payload) =>
      dispatch(setInt1NegDotValue(payload)),
    setInt2NegDotValue: (payload: setInt2NegDotValue_payload) =>
      dispatch(setInt2NegDotValue(payload)),
    // ,
    resetValues: () => dispatch(resetValues()),
    setAgainValues: (data2: data2) => dispatch(setAgainValues(data2)),
    set_btn1: () => dispatch(set_btn1()),
    set_btn2: () => dispatch(set_btn2()),
    set_btn3: () => dispatch(set_btn3()),
    set_btn4: () => dispatch(set_btn4())
  };
}
// function mapStateToProps(state: initialState) {
//   console.log(state.integer1);
//   return { integer1: state.integer1 };
// }
const mapStateToProps = (state: initialState): any => ({
  // console.log("state");
  // console.log(state.integer1);
  int1: state.integer1,
  int2: state.integer2,
  int2_check: state.int2_check,
  int1_check: state.int1_check,
  int2_value_check: state.int2_value_check,
  screen: state.screen,
  operator: state.operator,
  int1_dot: state.int1_dot,
  int2_dot: state.int2_dot,
  int1_divide: state.int1_divide,
  int2_divide: state.int2_divide,
  int1_neg: state.int1_neg,
  int2_neg: state.int2_neg,
  again_operator: state.again_operator,
  again_calculate: state.again_calculate,
  btn1: state.btn1,
  btn2: state.btn2,
  btn3: state.btn3,
  btn4: state.btn4,
  result: state.result,
  active: state.active,
  nonActive: state.nonActive
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);
// export default connect<initialState, any, void>(
//   mapStateToProps,
//   mapDispatchToProps
// )(Screen);

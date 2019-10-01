import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import "../Style.css";

export interface DigitProps {
  class: string;
  onClick: any;
  number: number;
}

export interface DigitState {}

class Digit extends React.Component<DigitProps, DigitState> {
  // state = { :  }
  render() {
    return (
      <button
        className={this.props.class}
        onClick={() => this.props.onClick(this.props.number)}
      >
        {this.props.number}
      </button>
    );
  }
}
export default Digit;

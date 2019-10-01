import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import "../Style.css";

export interface OperationProps {
  class: string | any;
  onClick: any;
  oprt: string;
}

export interface OperationState {}

class Operation extends React.Component<OperationProps, OperationState> {
  render() {
    // console.log(this.props.class);
    return (
      <button
        className={this.props.class}
        onClick={() => this.props.onClick(this.props.oprt)}
      >
        {this.props.oprt}
      </button>
    );
  }
}

export default Operation;

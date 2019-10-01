import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { connect } from "react-redux";
import "../Style.css";
import { initialState } from "../redux-js/constants/constants";

export interface ResultProps {
  screen?: string;
}

export interface ResultState {}

class Result extends React.Component<ResultProps, ResultState> {
  render() {
    return <h3>{this.props.screen}</h3>;
  }
}

const mapStateToProps = (state: initialState): any => {
  return {
    screen: state.screen
  };
};
export default connect(
  mapStateToProps,
  null
)(Result);

import * as React from "react";

// export interface AppProps {
//   compiler: string;
//   framework: string;
// }
// export interface AppState {
//   message: string;
// }

// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
class App extends React.Component<{}, {}> {
  state = {
    message: "App"
  };
  handleClick = (mess: string) => {
    console.log("i am in handle click");
    this.setState({ message: mess });
  };
  render() {
    return (
      <React.Fragment>
        <h1>hello {this.state.message}!</h1>
        <button onClick={() => this.handleClick("mohkam")}>Click me</button>
      </React.Fragment>
    );
  }
}
export default App;

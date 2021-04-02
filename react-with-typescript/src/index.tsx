import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  onAdd = (): void => this.setState({ counter: this.state.counter + 1 });
  onSubtract = (): void => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onSubtract}>Minus</button>
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector("#root"));

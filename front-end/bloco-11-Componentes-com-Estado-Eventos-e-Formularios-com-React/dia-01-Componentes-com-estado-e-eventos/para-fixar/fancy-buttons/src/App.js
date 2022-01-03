import React from "react";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick = () => {
    this.setState((estadoAnteriror, _props) => ({
      btn1: estadoAnteriror.btn1 + 1,
    }));
  };

  handleClick2 = () => {
    this.setState((estadoAnteriror, _props) => ({
      btn2: estadoAnteriror.btn2 + 1,
    }));
  };

  handleClick3 = () => {
    this.setState((estadoAnteriror, _props) => ({
      btn3: estadoAnteriror.btn3 + 1,
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.state.btn1}</button>
        <button onClick={this.handleClick2}>{this.state.btn2}</button>
        <button onClick={this.handleClick3}>{this.state.btn3}</button>
      </>
    );
  }
}

export default Test;

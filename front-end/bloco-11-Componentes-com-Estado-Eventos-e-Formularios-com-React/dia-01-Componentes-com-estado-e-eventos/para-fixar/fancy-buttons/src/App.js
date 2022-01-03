import React from "react";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clkcksBtnThree: 0,
    };

    this.handleBtnOne = this.handleBtnOne.bind(this);
    this.handleBtnTwo = this.handleBtnTwo.bind(this);
    this.handleBtnThree = this.handleBtnThree.bind(this);
  }

  handleBtnOne = () => {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }));
  };

  handleBtnTwo = () => {
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }));
  };

  handleBtnThree = () => {
    this.setState(({ clkcksBtnThree }) => ({
      clkcksBtnThree: clkcksBtnThree + 1,
    }));
  };

  getButtonColor(num) {
    return num % 2 === 0 ? "green" : "white";
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clkcksBtnThree } = this.state;
    return (
      <>
        <button
          onClick={this.handleBtnOne}
          style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
        >
          Botão 1 | Count = {clicksBtnOne}
        </button>
        <button
          onClick={this.handleBtnTwo}
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          Botão 2 | Count = {clicksBtnTwo}
        </button>
        <button
          onClick={this.handleBtnThree}
          style={{ backgroundColor: this.getButtonColor(clkcksBtnThree) }}
        >
          Botão 3 | Count = {clkcksBtnThree}
        </button>
      </>
    );
  }
}

export default Test;

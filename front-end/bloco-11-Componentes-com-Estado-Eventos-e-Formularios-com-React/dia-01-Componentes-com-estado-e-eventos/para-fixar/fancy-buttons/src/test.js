import React from "react";
import "./App.css";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    };
    this.state = {
      numeroDeCliques2: 0,
    };
    this.state = {
      numeroDeCliques3: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
    );
  }
}

export default Test;

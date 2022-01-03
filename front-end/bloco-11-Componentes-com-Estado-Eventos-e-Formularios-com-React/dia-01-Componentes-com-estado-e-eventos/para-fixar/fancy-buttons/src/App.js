import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick2.bind(this);
    this.handleClick = this.handleClick3.bind(this);
  }

  handleClick() {
    console.log('Clicou no botão 1!');
  }

  handleClick2() {
    console.log('Clicou no botão 2!!');
  }

  handleClick3() {
    console.log('Clicou no botão 3!!');
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}> botão 1</button>
        <button onClick={this.handleClick2}> botão 2</button>
        <button onClick={this.handleClick3}> botão 3</button>
      </>
    );
  }
}

export default App;

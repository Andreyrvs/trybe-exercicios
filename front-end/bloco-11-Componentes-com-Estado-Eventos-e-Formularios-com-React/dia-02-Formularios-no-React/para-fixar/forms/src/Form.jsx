import React, { Component } from "react";
// import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleTextarea.bind(this);
    this.handleIptNumber = this.handleIptNumber.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      estadoFavorito: "",
      inputNumber: "",
      inputCheckbox: "",
      select: "maca",
    };
  }

  handleTextarea(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  handleIptNumber(event) {
    this.setState({
      inputNumber: event.target.value,
    });
  }

  handleCheckbox(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      inputCheckbox: value,
    });
  }

  handleSelect(event) {
    this.setState({
      select: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            =)
            <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleTextarea}
            />
          </label>
          <input
            type="number"
            name="idade"
            value={this.state.inputNumber}
            onChange={this.handleIptNumber}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            checked={this.state.inputCheckbox}
            onChange={this.handleCheckbox}
          />
          <select value={this.state.select} onChange={this.handleSelect}>
            <option value="maca">Maca</option>
            <option value="banana">Banana</option>
            <option value="pessego">Pessego</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;

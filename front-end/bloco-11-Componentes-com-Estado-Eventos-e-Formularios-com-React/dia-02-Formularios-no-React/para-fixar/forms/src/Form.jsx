import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    // this.handleIptNumber = this.handleIptNumber.bind(this);
    // this.handleCheckbox = this.handleCheckbox.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      estadoFavorito: "",
      idade: "",
      vaiComparecer: "",
      select: "maca",
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  // handleIptNumber(event) {
  //   this.setState({
  //     inputNumber: event.target.value,
  //   });
  // }

  // handleCheckbox(event) {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   this.setState({
  //     inputCheckbox: value,
  //   });
  // }

  // handleSelect(event) {
  //   this.setState({
  //     select: event.target.value,
  //   });
  // }

  render() {
    return (
      <div className="container">
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>

        <form className="form-container">
          <fieldset>
            <label>
              Diga qual o seu Estado favorito! De React ou do Brasil, você
              decide! =)
            </label>
            <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleChange}
            />

            <label>number</label>
            <input
              type="number"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}
            />

            <label>checkbox</label>
            <input
              type="checkbox"
              name="vaiComparecer"
              checked={this.state.vaiComparecer}
              onChange={this.handleChange}
            />

            <label>select</label>
            <select value={this.state.select} onChange={this.handleChange}>
              <option value="maca">Maca</option>
              <option value="banana">Banana</option>
              <option value="pessego">Pessego</option>
            </select>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;

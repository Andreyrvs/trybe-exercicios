import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      estadoFavorito: "",
      idade: "",
      vaiComparecer: "",
      select: "maca",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file  - ${this.fileInput.current.files[0].name}`
      );
    }
    
    handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>

        <form className="form-container" onSubmit={this.handleSubmit}>
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

            <input type="file" ref={this.fileInput}></input>
            <input type="submit" value="enviar"></input>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;

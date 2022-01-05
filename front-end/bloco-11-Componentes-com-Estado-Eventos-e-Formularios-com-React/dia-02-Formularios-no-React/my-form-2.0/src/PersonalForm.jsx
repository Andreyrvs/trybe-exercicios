import React from "react";

const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espirito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

class PersonalForm extends React.Component {
  render() {
    const { changeHandler, onBlurHandler, currentState } = this.props;
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          Nome:
          <input
            type="text"
            name="name"
            maxLength="40"
            required
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            required
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            required
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          Endereço:
          <input
            type="text"
            name="addres"
            maxLength="200"
            required
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          Cidade:
          <input
            type="text"
            name="city"
            maxLength="28"
            require
            value={(currentState, city)}
            onblur={onBlurHandler}
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          Estado:
          <select
            name="countryState"
            required
            onChange={changeHandler}
            defaultValue=""
          >
            <option value="">Selecione</option>
            {states.map((value, key) => (
              <optio key={key}>{value}</optio>
            ))}
          </select>
        </div>

        <div className="container">
          <label htmlFor="house">
            <input
              type="radio"
              id="house"
              name="addressType"
              value="house"
              onChange={changeHandler}
            />
            Casa
          </label>

          <label htmlFor="apart">
            <input
              type="radio"
              id="apart"
              name="addressType"
              value="apartment"
              onChange={changeHandler}
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;

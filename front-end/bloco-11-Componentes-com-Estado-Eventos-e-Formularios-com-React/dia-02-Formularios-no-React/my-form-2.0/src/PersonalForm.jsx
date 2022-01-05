import React from 'react';

class PersonalForm extends React.Component {
  render() {
    return (
      <fieldset>
      <label>Nome</label>
      <input type="text" maxLength="40" required></input>

      <label>Email</label>
      <input type="email" maxLength="50" required></input>

      <label>CPF</label>
      <input type="text" maxLength="11" required></input>

      <label>Endereço</label>
      <input type="text" maxLength="200" required></input>

      <label>Cidade</label>
      <input type="text" maxLength="28" require></input>

      <label>Estado</label>
      <select required>
        <option></option>
      </select>

      <label>Casa</label>
      <input type="radio"></input>
      <label>Apartamento</label>
      <input type="radio"></input>

    </fieldset>
    );
  }
}

export default PersonalForm;
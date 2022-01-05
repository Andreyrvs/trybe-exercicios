import React from 'react';

class ProfessionalForm extends React.Component {
  render() {
    return (
      <fieldset>
        <label>Resumo do currículo</label>
        <textarea maxLength="1000" require></textarea>

        <label>Cargo</label>
        <textarea maxLength="40" require></textarea>

        <label>Descrição do cargo</label>
        <textarea maxLength="500" require></textarea>
      </fieldset>
    );
  }
}

export default ProfessionalForm;
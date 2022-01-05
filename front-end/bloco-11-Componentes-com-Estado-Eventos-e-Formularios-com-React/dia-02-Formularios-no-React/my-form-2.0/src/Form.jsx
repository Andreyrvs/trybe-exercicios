import React from "react";
import "./App.css";
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form>
        <PersonalForm />
        <ProfessionalForm />
        </form>
      </div>
    );
  }
}

export default Form;

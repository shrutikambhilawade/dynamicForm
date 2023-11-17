// src/components/FormGenerator.js
import React, { Component } from 'react';
import FormField from './FormField';
import FormView from './FormView';

class FormGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
    };
  }

  handleFieldChange = (value) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [value]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    this.setState((prevState) => ({
    }));
    console.log(this.state.formData);
  };

  render() {
    const { formConfig } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
       {formConfig.map((field, index) => (
          <FormField
            key={index}
            field={field}
            onFieldChange={this.handleFieldChange}
            removeFormField={this.props.removeFormField}
            
          />
        ))}
     
      <button className='submitButton' type="submit">Add to Form</button>
      <FormView
      formData = {this.state.formData}
      />
      </form>
       
     
    );
  }
}

export default FormGenerator;


//<button className="clearButton" type="clear" onClick={this.props.handleClear}>Clear</button>

// <button className='submitButton' type="submit">Add to Form</button>
// <FormView/>
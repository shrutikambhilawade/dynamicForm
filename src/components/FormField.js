 
import React, { Component } from 'react';
import FormView from './FormView';

class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: []
    };
  };
  handleChange = (e) => {
    const {value} = e.target;
    this.props.onFieldChange(value);
    this.setState((prevState) => ({
      formData: [
        ...prevState.formData,
        {label: value }],
      }));  
  }


  render() {
    const {  type, options, input} = this.props.field;

    switch (type) {
      case 'text':
        return (
          <div>
            <label id='label'>Label Name:</label>
            <input for='label' type='text' onChange={this.handleChange} required/>
            <span onClick={this.props.removeFormField}>&#x2716;</span>
          </div>
        );
        break;
        case 'textarea':
          return (
            <div>
              <label id='label'>Label Name:</label>
              <textarea for='label' type='textarea'  onChange={this.handleChange} required/>
              <span onClick={this.props.removeFormField}>&#x2716;</span>
            </div>
          );  

      case 'dropdown':
      case 'checkbox':
      case 'radiobutton':  
        return (
         <div>
            <div className='fieldinfo'>
              <label id='label'>Label Name:</label>
              <input for='label' type='text' onChange={this.handleChange} required/>
            </div>
            <div>
              <label id='option'>Add Options:</label>
              <textarea for='option' type='textarea' onChange={this.handleChange} required/>
              <span onClick={this.props.removeFormField}>&#x2716;</span> 
            </div>  
            </div>
        );
    }
   
  }
}


export default FormField;


// <select name={label} onChange={this.handleChange}>
// {options.map((option) => (
//   <option key={option} value={option}>
//     {option}
//   </option>
// ))}
// </select>
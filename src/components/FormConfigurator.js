// src/components/FormConfigurator.js
import React, { Component } from 'react';
import FormGenerator from './FormGenerator';

class FormConfigurator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formConfig: [],
    };
  }

  addFormField = (e) => {
    const id = e.target.id;
    switch(id){
      case 'textfield':
      case 'textarea':
        this.setState(() => ({
          formConfig: [
            {   type : 'text' },
          ],
        }));
        break;
    
      case 'checkbox':
        this.setState((prevState) => ({
          formConfig: [
            {  type: 'checkbox' },
          ],
        }));
        break;
        case 'dropdown':
          this.setState((prevState) => ({
            formConfig: [  
              {  type: 'dropdown'},
            ],
          }));
          break;
          case 'radiobutton':
            this.setState((prevState) => ({
              formConfig: [
                { label: 'New Field', type: 'radiobutton' },
              ],
            }));
            break;
            case 'button':
              this.setState((prevState) => ({
                formConfig: [
                  ...prevState.formConfig,
                  { label: 'add button', type: 'button' },
                ],
              }));
              break;
    
  };
}

  removeFormField = (index) => {
    this.setState((prevState) => {
      const updatedConfig = [...prevState.formConfig];
      updatedConfig.splice(index, 1);
      return { formConfig: updatedConfig };
    });
  };

  handleClear = () => {
    this.setState((prevState) => {
      return {formConfig: []}
    });
  }

  render() {
    return (
      <div>
        <div className='form'>  <h1>Form</h1> </div>      
        <button className='addButton' id="textfield" onClick={this.addFormField}>Add Text Field</button>
        <button className='addButton' id="textarea" onClick={this.addFormField}>Add text Area</button> 
        <button className='addButton' id='dropdown' onClick={this.addFormField}>Add Drop Down </button> 
        <button className='addButton' id='checkbox' onClick={this.addFormField}>Add checkbox</button>
        <button className='addButton' id='radiobutton' onClick={this.addFormField}>Add Radio Button</button> 
        <button className='addButton' id='button' onClick={this.addFormField}>Add Button</button>
        <FormGenerator 
        formConfig={this.state.formConfig}
        handleClear={this.handleClear} 
        removeFormField={this.removeFormField}
        />
      </div>
    );
  }
}

export default FormConfigurator;

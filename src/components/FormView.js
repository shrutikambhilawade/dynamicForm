
import React, { Component } from 'react';

class FormView extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { formData} = this.props.formData;
    return(
      null
    )
//      formData.map((index)=>{
//     switch (type) {
//       case 'text':
//         return (
//           <div>
//             <label id='label'>Label Name:</label>
//             <input for='label' type='text' onChange={this.handleChange}/>
//             <span onClick={this.props.removeFormField}>&#x2716;</span>
//           </div>
//         );
//         case 'textarea':
//           return (
//             <div>
//               <label id='label'>Label Name:</label>
//               <textarea for='label' type='textarea' onChange={this.handleChange}/>
//               <span onClick={this.props.removeFormField}>&#x2716;</span>
//             </div>
//           );  

//       case 'dropdown':
//       case 'checkbox':
//       case 'radiobutton':  
//         return (
//          <div>
//             <div className='fieldinfo'><label id='label'>Label Name:</label>
//             <input for='label' type='text' onChange={this.handleChange}/>
//             </div>
//             <div>
//             <label id='option'>Add Options in comma seprate:</label>
//             <textarea for='option' type='textarea' onChange={this.handleChange}/>
//             <span onClick={this.props.removeFormField}>&#x2716;</span> 
//             </div>  
//             </div>
//         );
     
    //   default:
    //     return null;
    // }
  
  
  }
}
export default FormView;



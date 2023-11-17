import './App.css';
import React, {Component} from 'react';
import FormConfigurator from './components/FormConfigurator';

class App extends Component {
render(){
  return(
    <div className="App">
      <FormConfigurator />
    </div>
    )
  }
}
export default App;






//   return (
//     <div className="App">
//       <table width={1200}>
//         <theader>
//           <tr><th className="addField">Add Fields from Here</th>
//           <th className="form">Form</th></tr>
//         </theader>
//         <tbody>
//           <tr><td><button id='textfield' onClick={onclickListner()}>Add text Field</button></td></tr> 
//           <tr><td><button id="textarea" onClick={onclickListner()}>Add text Area</button></td></tr> 
//           <tr><td><button id='dropdown' onClick={onclickListner()}>Add Drop Down </button></td></tr> 
//           <tr><td><button id='checkbox' onClick={onclickListner()}>Add checkbox</button></td></tr>
//           <tr><td><button id='radiobutton' onClick={onclickListner()}>Add Radio Button</button></td></tr> 
//           <tr><td><button id='submitbutton' onClick={onclickListner()}>Add Button</button></td></tr>
//         </tbody>
//     </table>
//   </div>
//   );
// }
// function onclickListner(e) {
//   const id = e;
// // switch(id){
// //   case "textfield":

// //     break;
// //   case "textarea":
// //     break;  
// // }

// }


import { Component } from 'react';

import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import Contacts from './component/Contacts';
import Profider from './component/Context';
import AddContact from './component/addContact';

class App extends Component {
  render(){
    let title = "Client Panel  "
    return (
     
        <Profider>
           <div className="div">
          <Navbar title= {title} ></Navbar>
          <AddContact></AddContact>
          <Contacts></Contacts>
        </div>
        </Profider>
    )
  }
}
export default App;

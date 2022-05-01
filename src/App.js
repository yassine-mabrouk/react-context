
import { Component } from 'react';

import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import Contacts from './component/Contacts';
import Profider from './component/Context';
import AddContact from './component/addContact';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import NotFoundPage from './component/NotFound';
import EditContact from './component/EditContact';

class App extends Component {
  render(){
    let title = "Client Panel  "
    return (
     
        <Profider>
          <Router>
           <div className="div">
          <Navbar title= {title} ></Navbar>
           <Switch>
             <Route exact path='/' component={Contacts} />
             <Route exact path='/contact/add' component={AddContact} />
             <Route exact path='/contact/edit/:id' component={EditContact} />
             <Route exact path='/about/:id' component={About}/>
               {/* default route  */}
             <Route component={NotFoundPage}/>
            
           </Switch>
        </div>
        </Router>
        </Profider>
    )
  }
}
export default App;

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'
import { Consumer } from './Context';
import { Link } from 'react-router-dom';
   class Contact extends Component {
       
     state = { 
        showTogle: true
     }
       showContact = ()=>{
        console.log("actions ")
        this.setState({
            showTogle:!this.state.showTogle
        }); 
    }
    
    onDeleteContact=(id , dispatch)=> {
          axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then (res => {
            dispatch({
                type: "DELETE_CONTACT",
                payload:id 
            })
            console.log("delete contact: "+ id )
          })
          .catch(err => console.log("Cannot delete contact "))
  
        // pour acceder a une props de type function il faut avoir arow function 
        //this.props.deleteContact()
    }
  
    render() {
     
        const {id,  name , phone , email }= this.props.data;
      
        return (
            <Consumer>
                {value => (
                     <div className="card mt-2" >
                     <div className="card-body">
                        <h4 className="card-title">{name}
                        <i  onClick={()=> this.showContact()} className='fa fa-sort-down'></i>
                        <i  onClick={()=> this.onDeleteContact(id ,value.dispatch)} className='fa fa-times myIcon'></i>
                         <Link to = {"/contact/edit/"+id}>   <i class="fa fa-pencil myIcon2"  ></i></Link>
                        </h4>   
                   <div className="cart-text">
                     { (this.state.showTogle) ? (    <ul className="list-group list-group-flush">
                        <li className="list-group-item">phone :{phone}</li>
                        <li className="list-group-item">Email: {email}</li>
                        
                    </ul>) : null  }
                   </div>
                     </div>
                    </div>
               
                )}
            </Consumer>
        )
     
    }
}

// add default props 
// Contact.defaultProps= {
//     name: "Default name ",
//     phone : "0000000",
//     email: "email@gmail.com"
// }
Contact.propTypes= {
    data : PropTypes.object.isRequired,
    
}
export default Contact;
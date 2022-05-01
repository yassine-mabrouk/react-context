import React, { Component } from 'react'
import { Consumer } from './Context'
import Contacts from './Contacts';
import TextInputGroup from '../helpers/textInputGroup';
import axios from 'axios'

 class EditContact extends Component {
   
     state = {
         name : '',
         email: '',
         phone : '',
         errors : {}
     }
     onInputChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
     editContact = (dispatch,e) => {
      //   e.preventDefault()
         e.preventDefault();
         const {name ,email, phone}= this.state;
         if (name==""){
            this.setState(
                {
                    errors: { name: "the name is required ! "}
                }
            )
             return;
         }
         if (email==""){
            this.setState(
                {
                    errors: { email: "the email is required ! "}
                }
            )
            return;
        }
        if (phone==""){
            this.setState(
                {
                    errors: { phone: "the phone is required ! "}
                }
            )
            return;
        }

        const newContact ={
            name : name,
            email:  email,
            phone :  phone
           }
           const id = this.props.match.params.id
           axios.put("https://jsonplaceholder.typicode.com/users/"+id,newContact)
        .then(res => {
            console.log(res.data)
            
            dispatch ({
                type: 'EDIT_CONTACT',
                payload:res.data
            })
        })
        .catch(err => console.log("cannot edit contact "))
     
       this.setState({
        name : '',
        email: '',
        phone : '',
        errors: {}
       })
       // pour la redirection 
       this.props.history.push('/');

    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            this.setState({
                name : res.data.name,
                email: res.data.email,
                phone : res.data.phone,
            })
        })
        .catch(err => console.log("Cannot get contact to update !!"))
    }
    render() {
        const {name ,email, phone,errors}= this.state;
        return (
            <div>
                <Consumer> 
                      {value => {
                          const {dispatch} =value;
                          return (
                            <div className="container mt-2 mb-2 ">
                            <h3>Add Contact</h3>
                        <form  onSubmit={ this.editContact.bind(this,dispatch)} >
                         <TextInputGroup
                         label="Name"
                         type="text"
                         name="name"
                         value= {name}
                         onChange={this.onInputChange}  
                         error={errors.name}                       
                         />
                       <TextInputGroup
                         label="Email"
                         type="text"
                         name="email"
                         value= {email}
                         onChange={this.onInputChange}    
                         error={errors.email}                     
                         />
                            <TextInputGroup
                         label="Phone"
                         type="text"
                         name="phone"
                         value= {phone}
                         onChange={this.onInputChange}    
                         error={errors.phone}                     
                         />
                   
                        <button type='submit' className="btn btn-block btn-warning">Edit Contact</button>
                        </form>
                        </div>
                          )
                      }
                            
                }
                </Consumer>
            </div>
        )
    }
}
export default  EditContact

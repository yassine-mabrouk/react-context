import React, { Component } from 'react'
import { Consumer } from './Context'
import Contacts from './Contacts';

 class AddContact extends Component {
   
     state = {
         name : '',
         email: '',
         phone : ''
     }
     onInputChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
     saveContact = (dispatch,size,e) => {
      //   e.preventDefault()
         e.preventDefault();
         
        console.log(this.state)
       dispatch ({
           type: 'ADD_CONTACT',
           payload:{
            id:size+1,
            name : this.state.name,
            email:  this.state.email,
            tel :  this.state.phone
           }
       })
       this.setState({
        name : '',
        email: '',
        phone : ''
       })

    }
    render() {
        const {name ,email, phone}= this.state;
        return (
            <div>
                <Consumer> 
                      {value => {
                          const {dispatch} =value;
                          return (
                            <div className="container mt-2 mb-2 ">
                            <h3>Add Contact</h3>
                        <form  onSubmit={ this.saveContact.bind(this,dispatch,value.contacts.length)} >
                        <div className="form-group">
                            <label for="email">Name </label>
                            <input   type="text" className="form-control" placeholder="Enter name"
                            defaultValue={name}  
                            name ="name"
                            onChange={this.onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label for="tel">Tel </label>
                            <input type="text" className="form-control" placeholder="Enter Tel" 
                                 defaultValue={phone}  
                                 name ="phone"
                                 onChange={this.onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Email:</label>
                            <input  type="text" className="form-control" placeholder="Enter Email"
                                 defaultValue={email}  
                                 name ="email"
                                 onChange={this.onInputChange}
                            />
                        </div>
                   
                        <button type='submit' className="btn btn-block btn-primary">Submit</button>
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
export default  AddContact

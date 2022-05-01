import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from './Context';

class Contacts extends Component {
         // state : data of component 
    /*  
    deleteContact=(id)=>{
         const {contacts} = this.state;
         const newContact = contacts.filter((c)=> c.id!=id );
         this.setState({
             contacts: newContact
         })
        console.log("delete contact ")
        
    }*/

    render() {
    
        return (
            <Consumer>
                {value => (
                          <div>
                              <h3 className='text-center mt-5 mb-3'>Listes des Contacts</h3>
                          {value.contacts.map((contact) => (
                              <Contact key={contact.id} data={contact}  ></Contact>
                          ))}
                      
                      </div>
               
                )}
            </Consumer>
        )

    
    }
}

export default  Contacts;

import axios from 'axios';
import React, { Component } from 'react'

const Context = React.createContext();
const reducer = (state , action )=> {
   switch(action.type) {
       case "DELETE_CONTACT" :
           return {
               contacts : state.contacts.filter((c)=> c.id!==action.payload )
           };
           case "ADD_CONTACT" :
            return {
              contacts: [action.payload ,...state.contacts]
            };
            case "EDIT_CONTACT" :
                return {
                  contacts:state.contacts.map(contact => contact.id===action.payload.id ? contact=action.payload: contact)
                };
        default :
        return state;
   }

}
export default class Profider extends Component {
    state = {
       contacts: [
            {id: 1, name: "yassine " , phone: "061338848", email: "yassine@gmail.com"},
            {id: 2, name: "yassine " , phone: "061338848", email: "yassine@gmail.com"},
            {id: 3, name: "yassine " , phone: "061338848", email: "yassine@gmail.com"}
        ] ,
        dispatch : (action) => this.setState(state => reducer(state,action))
    }
    // Component life cycle 
    /*
    componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => { 
        this.setState({
            contacts: res.data
        })
    .catch(err => console.log("Cannot get data from server "))
    })
    }
    * */
    // try with asyn and await to fetch data 

  async  componentDidMount(){

        try{
            const res = await  axios.get("https://jsonplaceholder.typicode.com/users")
            this.setState({
             contacts: res.data
         })
        }catch(err) {
            console.log("cannot get contacts  "+ err)
        }
        }
    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}
export const Consumer = Context.Consumer;
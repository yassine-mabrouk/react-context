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
        default :
        return state;
   }

}
export default class Profider extends Component {
    state = {
        contacts: [
            {id: 1, name: "yassine " , tel: "061338848", email: "yassine@gmail.com"},
            {id: 2, name: "yassine " , tel: "061338848", email: "yassine@gmail.com"},
            {id: 3, name: "yassine " , tel: "061338848", email: "yassine@gmail.com"}
        ],
        dispatch : (action) => this.setState(state => reducer(state,action))
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
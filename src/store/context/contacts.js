import React from "react";


const contextAPI = React.createContext()



const contactProvider = contextAPI.Provider
const contactConsumer = contextAPI.Consumer


class ContactsApi extends React.Component{

    render(){
        <contactProvider />
    }
}



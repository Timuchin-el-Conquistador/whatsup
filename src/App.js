import Auth from "./pages/forms/auth";
import { Container, Row, Col } from "reactstrap";
import React from "react";
import Dashboard from "./pages/Dashboard/dashboard";

import { ContactsProvider } from "./store/context/contacts";
import { ConversationsContextProvider } from "./store/context/conversations";

import { SocketContextProvider } from "./helper/socket";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: null };
  }
  componentDidMount() {
    let username = localStorage.getItem("id")
    if(username !=null){
      username = JSON.parse(username)
      this.setState({ id: username.id});
    }
    
  }
  submitPrivatDat(data) {
    this.setState({id:data.id});
    localStorage.setItem("id", JSON.stringify({id:data.id, name:data.username}))
  }

  render() {
    const { id } = this.state;
    console.log(id)
    return (
      <Container>
        {id ? (
          <SocketContextProvider id={id}>
            <ContactsProvider>
              <ConversationsContextProvider>
                {" "}
                <Dashboard />
              </ConversationsContextProvider>
            </ContactsProvider>
          </SocketContextProvider>
        ) : (
          <Auth onSubmit={this.submitPrivatDat.bind(this)} />
        )}
      </Container>
    );
  }
}

export default App;

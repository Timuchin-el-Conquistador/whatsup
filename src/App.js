import Auth from "./pages/forms/auth";
import { Container, Row, Col } from "reactstrap";
import React from "react";
import Dashboard from "./pages/Dashboard/dashboard";
import LocalStorage from "./components/helpers/storages/localStorage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }
  componentDidMount() {
    const item = new LocalStorage('id')
    const username = item.storage()
    this.setState({ id: username });
  }
  submitPrivatDat(data) {
    this.setState({ id: data.username });
    localStorage.setItem("id", data.username);
  }

  render() {
    console.log(this.state.id);
    return (
      <Container>
    
            {this.state.id ? (
              <Dashboard />
            ) : (
              <Auth onSubmit={this.submitPrivatDat.bind(this)} />
            )}
     
      </Container>
    );
  }
}

export default App;

import React from "react";

import { Container, Row, Col } from "reactstrap";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { publicRoutes, AuthProtectedRoutes } from "./router/routes";

import Auth from "./pages/Authentication/Login/Login";
import LandingPage from "./pages/main-landing-page/main";
import Dashboard from "./pages/Dashboard/dashboard";

import AppRoutes from "./router/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }
  componentDidMount() {
    let username = localStorage.getItem("id");
    if (username != null) {
      username = JSON.parse(username);
      this.setState({ id: username.id });
    }
  }
  submitPrivatDat(data) {
    this.setState({ id: data.id });
    localStorage.setItem(
      "id",
      JSON.stringify({ id: data.id, name: data.username })
    );
  }

  render() {
    const { id } = this.state;
    console.log(id);
    return (
      <React.Fragment>
         <Router>
        <Switch>
  
          {publicRoutes.map((route, i) => {
            console.log(route);
            return (
              <AppRoutes
                component={route.component}
                isAuth={false}
                path={route.path}
                key={i}
              />
            );
          })}
           
        </Switch>
         </Router>
      </React.Fragment>
    );
  }
}

export default App;

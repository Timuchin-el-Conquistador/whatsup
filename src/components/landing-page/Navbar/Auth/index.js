import React from "react";
import { Link, Router} from "react-router-dom";

import classes from './index.module.css' 

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <nav className={` ${classes.auth_container}`}>
          <ul className="d-flex align-items-center">

              <li className={classes.auth_item}>
                <Link to="/login">Sign in</Link>
              </li>
              
              <li className={classes.auth_item}>
                <Link to="/register">Sign up</Link>
              </li>
        
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Auth;

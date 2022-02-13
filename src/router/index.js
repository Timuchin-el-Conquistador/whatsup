import React from "react";

import { Route, Redirect } from "react-router-dom";


const AppRoutes  = ({component: Component, isAuth, ...rest }) => {
 

    return (
      <Route
        {...rest}
        render={(props) => {
          console.log(props)
          if (isAuth && !sessionStorage.getItem("userAuth")) {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
          }
          return <Component {...props} />;
        }}
      />
    );
  
}


export default AppRoutes
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./stores/store";
import { ContactsProvider } from "./store/context/contacts";
import { ConversationsContextProvider } from "./store/context/conversations";
import { SocketContextProvider } from "./helper/socket";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

    <Provider store={store}>

        <ContactsProvider>
          <ConversationsContextProvider>
          <BrowserRouter>
            <App />
            </BrowserRouter>
          </ConversationsContextProvider>
        </ContactsProvider>

    </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import React from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

import contextAPI from "../../../store/context/contacts";

import classes from "./index.module.css";

class Contacts extends React.Component {
  static contextType = contextAPI;
  constructor(props) {
    super(props);
  }

  deleteContact = event => {
      const id = event.target.name  
      const {contacts, setContact, deleteContact} = this.context
       
      deleteContact({id})
  }

  render() {
    const { contacts } = this.context;
    console.log(contacts);
    return (
      <React.Fragment>
        <ListGroup>
          {contacts.map((contact, index) => (
            <ListGroupItem className={classes.list_item} key={index}>
              <span className={classes.item}>{contact.name}</span>
              <a name={contact.id} className={classes.dlt_btn} onClick={this.deleteContact}>
                Delete
              </a>
            </ListGroupItem>
          ))}
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Contacts;

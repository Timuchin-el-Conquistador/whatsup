import React from "react";
import { ModalBody, ModalHeader } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import contextAPI from "../store/context/contacts";
import classes from "./index.module.css";

class NewConversations extends React.Component {
  static contextType = contextAPI;
  constructor(props) {
    super(props);
  }

  addForConversation = event => {
    const id = event.target.id 
    const name = event.target.name
    const {setContactForConversations} = this.context
    setContactForConversations({id, name})
    this.props.toggle()
  }
  render() {
    const { contacts } = this.context;
    return (
      <React.Fragment>
        <ModalHeader toggle={this.props.toggle}>
          Create Conversation
        </ModalHeader>
        <ModalBody>
          <ListGroup>
            {contacts.map((contact, index) => (
              <ListGroupItem key={index} className={classes.contacts}>
                <span className={classes.contact_name}>{contact.name}</span>
                <a
                  id={contact.id}
                  name={contact.name}
                  className={classes.contact_add}
                  onClick={this.addForConversation}
                >
                  +Add
                </a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ModalBody>
      </React.Fragment>
    );
  }
}

export default NewConversations;

import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import contextAPI from "../../../store/context/contacts";

import classes from "./index.module.css";

class Conversations extends React.Component {
  static contextType = contextAPI;
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
  }

  chooseContactToConverse = (event) => {
    const name = event.target.getAttribute("name");
    const id = event.target.getAttribute("id");
    const info = {id,name}
    const {setActiveRecipient} = this.context
    setActiveRecipient(info)
    this.setState({ selected: name });
  };

  render() {
    const { conversations } = this.context;
    const { selected } = this.state;
    return (
      <React.Fragment>
        <ListGroup variant="flash">
          {conversations.map((conversation, index) => (
            <ListGroupItem
              className={classes.list_item}
              key={index}
              name={conversation.name}
              id = {conversation.id}
              action
              active={selected === conversation.name}
              onClick={this.chooseContactToConverse}
            >
              <span>{conversation.name}</span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Conversations;

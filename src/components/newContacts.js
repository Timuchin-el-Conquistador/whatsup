import React from "react";
import {
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  ModalBody,
} from "reactstrap";

import contextAPI from "../store/context/contacts";

class NewContacts extends React.Component {
  static contextType = contextAPI;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
    };
    this.submitNewContact = this.submitNewContact.bind(this);
  }
  submitNewContact(e) {
    e.preventDefault();
    const { contacts, setContact } = this.context;
    setContact({ name: this.state.name, id: this.state.id });
    this.props.toggle()
  }

  inputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ ...this.state, [id]: value });
  };
  render() {
    return (
      <React.Fragment>
        <ModalHeader toggle={this.props.toggle}>Create Contacts</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.submitNewContact}>
            <FormGroup>
              <Label for="id">Id</Label>
              <Input id="id" onChange={this.inputChange} />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" onChange={this.inputChange} />
            </FormGroup>
            <Button type='submit'>Create</Button>
          </Form>
        </ModalBody>
      </React.Fragment>
    );
  }
}

export default NewContacts;

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

class NewContacts extends React.Component {
  constructor(props) {
    super(props);
    this.submitNewContact = this.submitNewContact.bind(this);
  }
  submitNewContact(e) {
    e.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <ModalHeader toggle={this.props.toggle}>Create Contacts</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.submitNewContact}>
            <FormGroup>
              <Label for="id">Id</Label>
              <Input id="id" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" />
            </FormGroup>
            <Button>Create</Button>
          </Form>
        </ModalBody>
      </React.Fragment>
    );
  }
}

export default NewContacts;

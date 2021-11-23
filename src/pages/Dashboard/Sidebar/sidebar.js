import React from "react";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Tab,
  Container,
  Modal,
} from "reactstrap";
import classnames from "classnames";

import Conversations from "../../../components/dashboards/Conversations/conversations";
import Contacts from "../../../components/dashboards/Contacts/contacts";

import NewConversations from "../../../components/newConversations";
import NewContacts from "../../../components/newContacts";

const CONVERSATIONS = "conversations";
const CONTACTS = "contacts";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: CONVERSATIONS,
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        ...this.state,
        activeTab: tab,
      });
    }
  }
  toggleModal() {
    this.setState({
      ...this.state,
      modal: !this.state.modal,
    });
  }
  render() {
    return (
      <div>
        <Container
          style={{ width: "300px", height: "100%" }}
          className="d-flex flex-column"
        >
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === CONVERSATIONS,
                })}
                onClick={() => {
                  this.toggle(CONVERSATIONS);
                }}
              >
                Conversations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === CONTACTS,
                })}
                onClick={() => {
                  this.toggle(CONTACTS);
                }}
              >
                Contacts
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent
            activeTab={this.state.activeTab}
            className="border-end  y-overflow-auto flex-grow-1"
          >
            <TabPane tabId={CONVERSATIONS}>
              <Conversations />
            </TabPane>
            <TabPane tabId={CONTACTS}>
              <Contacts />
            </TabPane>
          </TabContent>
          <Button
            color="primary"
            onClick={this.toggleModal}
            className={this.props.className}
          >
            New
            {this.state.activeTab === CONVERSATIONS
              ? "Conversations"
              : "Contacts"}
          </Button>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          {this.state.activeTab === CONVERSATIONS ? (
            <NewConversations toggle={this.toggleModal} />
          ) : (
            <NewContacts toggle={this.toggleModal} />
          )}
        </Modal>
      </div>
    );
  }
}

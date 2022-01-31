import React from "react";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
  Modal,
} from "reactstrap";
import classnames from "classnames";
import classes from './index.module.css'

import Conversations from "../../../components/dashboards/Conversations/conversations";
import Contacts from "../../../components/dashboards/Contacts/contacts";

import NewConversations from "../../../components/newConversations";
import NewContacts from "../../../components/newContacts";

import socketContextApi from "../../../helper/socket";

const CONVERSATIONS = "conversations";
const CONTACTS = "contacts";

export default class Sidebar extends React.Component {
  static contextType = socketContextApi
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: CONVERSATIONS,
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.socket = null
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

  exitMode =() => {
    const {socket} = this.context
    const user = JSON.parse(localStorage.getItem('id'))
    socket.emit('offline', {query: {id: user.id}})
    window.location.reload()
    localStorage.clear('id')
  }


  componentDidUpdate(){
    const {socket} = this.context
    this.socket = socket.on('status', data => {
      console.log(data)
    })
  }
  render() {
    const {active} = this.props
    return (
      <React.Fragment>
        <Container
          style={{ width: `${!active.display ? "252.9px" :'322px'}`, height: "100%" }}
          className="d-flex flex-column"
        >
          <Nav tabs>
            <NavItem>
              <NavLink
                className={`${classnames({
                  active: this.state.activeTab === CONVERSATIONS,
                })} ${classes.tab_hover}`}
                onClick={() => {
                  this.toggle(CONVERSATIONS);
                }}
              >
                Conversations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                  className={`${classnames({
                    active: this.state.activeTab === CONTACTS,
                  })} ${classes.tab_hover}`}
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
            {`New 
            ${ this.state.activeTab === CONVERSATIONS
              ? "Conversations"
              : "Contacts"}`}
          </Button>
          <Button color="danger" className={this.props.className} onClick={this.exitMode}>
            Exit
          </Button>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          {this.state.activeTab === CONVERSATIONS ? (
            <NewConversations toggle={this.toggleModal} />
          ) : (
            <NewContacts toggle={this.toggleModal} />
          )}
        </Modal>
      </React.Fragment>
    );
  }
}

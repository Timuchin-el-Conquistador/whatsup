import React from "react";

import LocalStorage from "../../components/helpers/storages/localStorage";
import Friends from '../../components/helpers/storages/frineds'

const contextAPI = React.createContext();

export class ContactsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      conversations: [],
      active: {display:false, info: {}}
    };
    this.setContact = this.setContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.setContactForConversations = this.setContactForConversations.bind(this)
    this.setActiveRecipient = this.setActiveRecipient.bind(this)
  }

  componentDidMount() {
    const contacts = LocalStorage.returnContacts("contacts");
    const friends = Friends.getFriends()
  
    console.log(friends);
    if (contacts) this.setState({ ...this.state, contacts, conversations: [...friends] });
  }

  setContact({ name, id }) {

    LocalStorage.setContacts({
      key: "contacts",
      data: [...this.state.contacts, { name, id }],
    });
    this.setState({ contacts: [...this.state.contacts, { name, id }] });
  }

  deleteContact({ id }) {
    const contacts = this.state.contacts;

    const updated = contacts.filter((contact) => {
      console.log(contact.id);
      if (contact.id !== id) {
        return contact;
      }
    });

    this.setState({ contacts: updated });
    LocalStorage.setContacts({ key: "contacts", data: updated });
  }

  setContactForConversations({ id,name }) {
    const contact = {id,name}
    console.log(contact)
    const friend = new Friends(contact)
    friend.save(this.state.conversations)
    this.setState({
      ...this.state,
      conversations: [...this.state.conversations, contact],
    });
  }

  setActiveRecipient(info){
    console.log(info)
    this.setState({...this.state, active: {display: true, info}})
   
  }
  


  render() {
    console.log(this.state)
    const { contacts, conversations, active } = this.state;
    const { setContact, deleteContact, setContactForConversations,setActiveRecipient} = this;
    return (
      <contextAPI.Provider
        value={{
          contacts,
          conversations,
          active,
          setContact,
          deleteContact,
          setContactForConversations,
          setActiveRecipient
        }}
      >
        {this.props.children}
      </contextAPI.Provider>
    );
  }
}

export default contextAPI;

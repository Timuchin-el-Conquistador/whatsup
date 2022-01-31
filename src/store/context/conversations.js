import React from "react";

import socketContextApi from "../../helper/socket";

const conversationApi = React.createContext();




export class ConversationsContextProvider extends React.Component {
  static contextType = socketContextApi;
  constructor(props) {
    super(props);
    this.state = {
      myConversationsList: [],
      count:0
    };
    this.addMessage = this.addMessage.bind(this);
    this.socket = null;
  }

  addMessage(data) {
    console.log("hi");
    const { socket } = this.context;
    socket.emit("send-message", data);
    if (data.message.includes("http")) {
      data.message = (
        <a className="link" href={data.message} target="_blank">
          {data.message}
        </a>
      );
    }
    this.setState({
      myConversationsList: [...this.state.myConversationsList, data],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { socket } = this.context;
    
     if(socket){
        console.log(socket)
        
        this.socket = socket.on("mesage-recieved", (data) => {
          if (data) {
            console.log(data);
            if (data.message.includes("http")) {
              data.message = (
                <a className="link" href={data.message} target="_blank">
                  {data.message}
                </a>
              );
            }
          if(data.count!==this.state.count){
            this.setState({
              myConversationsList: [...this.state.myConversationsList, data],
              count: data.count
            });
        }
          }
        });
     }
    
  }

  componentWillUnmount() {
    const { socket } = this.context;
    if (socket) {
      this.socket.close();
    }
  }

  render() {
    const { children } = this.props;
    const { myConversationsList } = this.state;
    const { addMessage } = this;
    return (
      <conversationApi.Provider
        value={{
          myConversationsList,
          addMessage,
        }}
      >
        {children}
      </conversationApi.Provider>
    );
  }
}

export default conversationApi;

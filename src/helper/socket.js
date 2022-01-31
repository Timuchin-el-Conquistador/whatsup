import React from "react";
import { io } from "socket.io-client";



const socketContextApi = React.createContext();

export class SocketContextProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = { socket: null };
    this.socket = null;
  }
  componentDidMount() {
    const { id } = this.props;
   console.log(id)
    this.socket = io("http://localhost:4000");

    this.setState({
      ...this.state,
      socket: this.socket,
    });
     
    this.socket.emit('online', { query: {id:''+ id } })
  
    
  }

  componentDidUpdate(prevvProps) {
    if (prevvProps.id !== this.props.id) {
      const { id } = this.props;

      this.socket = io("http://localhost:4000");

      this.setState({
        ...this.state,
        socket: this.socket,
      });

      this.socket.emit('online', { query: {id:''+ id } })
   
    }

  }
  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    
    const { children } = this.props;
    const {socket} = this.state
    return (
      <socketContextApi.Provider value={{socket}}>
        {children}
      </socketContextApi.Provider>
    );
  }
}

export default socketContextApi;

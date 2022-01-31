import { Button, message } from "antd";
import React from "react";

import { Row, Col, Input, Container } from "reactstrap";
import classes from "./index.module.css";
import './index.css'

import conversationApi from "../../../store/context/conversations";

class Conversation extends React.Component {
  static contextType = conversationApi;
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  onNewConversationChange = (event) => {
    const message = event.target.value;
    this.setState({ message });
  };

  submitMessage = () => {
    const { addMessage } = this.context;
    let message = this.state.message;
 
    const info = JSON.parse(localStorage.getItem("id"));
    addMessage({
      from: { id: info.id, name: info.name },
      to: { room: this.props.info.id, name: this.props.info.name },
      message,
    });
    this.setState({message:''})
  };

  render() {
    const { myConversationsList } = this.context;
    const { id, name } = JSON.parse(localStorage.getItem("id"));
    console.log(myConversationsList);
    return (
      <React.Fragment>
        <Container className={classes.convers_container}>
          <Row className={classes.convers_title}>Conversation History</Row>
          <Col
            style={{
              height: "80%",
              overflow: "auto",
              overflowX: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {myConversationsList.map((conver, i) => (
              <Row key={i}>
                <p
                  className={` p-0 m-0 d-flex ${
                    conver.from.id === id
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  <span className={classes.message}>{conver.message}</span>
                </p>
                <p className={conver.from.id === id ? classes.author : classes.author_else}>
                  {conver.from.id === id ? "You" : conver.from.name}
                </p>
              </Row>
            ))}
            {/* <h3 style={{ textAlign: "center" }}>
              {new Date().getFullYear().toString().substr(2, 2) +
                "." +
                new Date().getMonth() +
                1 +
                "." +
              new Date().getDate()}
              </h3>*/}
          </Col>
          <Row>
            <span style={{ position: "relative" }}>
              <Input onChange={this.onNewConversationChange}  value={this.state.message} />{" "}
              <Button
                className={classes.btn_new_convers}
                onClick={this.submitMessage}
               
              >
                Send
              </Button>
            </span>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Conversation;

import { Form, Input, Button, Checkbox } from "antd";
import React from "react";

import './index.css'

import { SignupUser } from "../../../stores/actions";

import {connect} from 'react-redux'
import Navbar from "../../../components/Authentication/Navbar/index";

import { withRouter } from "react-router-dom";

class Register extends React.Component {
 constructor(props){
     super(props)
 }

  render() {
    console.log(this.props)
    const {SignupUser} = this.props
    const onFinish = (values) => {
      console.log("Success:", values);
      //this.props.onSubmit(values);
      SignupUser(values)
  
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    
    console.log(this.props)
    return (
      <React.Fragment>
      <Navbar/>
      <div style={{height:'100vh'}} className=" d-flex justify-content-center align-items-center ">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          className="login-eye"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          className="login-eye"
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password  className='login-eye'/>
        </Form.Item>


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="antd-button">
            Register
          </Button>
        </Form.Item>
      </Form>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(null, {SignupUser})(Register))

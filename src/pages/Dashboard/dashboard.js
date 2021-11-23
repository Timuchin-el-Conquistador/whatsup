import React from "react";
import Sidebar from './Sidebar/sidebar'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className ='d-flex' style={{height:'100vh'}}>
          <Sidebar/>
      </div>
    );
  }
}

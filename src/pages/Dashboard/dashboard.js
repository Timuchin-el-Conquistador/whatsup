import React from "react";
import Conversation from "../../components/dashboards/Conversation/index";
import Sidebar from './Sidebar/sidebar'
import contextAPI from "../../store/context/contacts";

export default class Dashboard extends React.Component {
  static contextType = contextAPI
  constructor(props) {
    super(props);
  }


  render() {
    const {active} = this.context
    console.log(active)
    return (
      
      <div className ='d-flex' style={{height:'100vh'}}>
          <Sidebar active={active}/>
          {active.display && <Conversation info={active.info}/>}
      </div>
    );
  }
}

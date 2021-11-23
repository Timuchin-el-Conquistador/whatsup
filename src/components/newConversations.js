
import React from 'react'
import {ModalHeader} from 'reactstrap'

class NewConversations extends React.Component{
   constructor(props){
    super(props)
   }
   render(){
       return(
         <React.Fragment>
             <ModalHeader toggle={this.props.toggle}>Create Conversation</ModalHeader>
         </React.Fragment>
       )
   }
}


export default NewConversations
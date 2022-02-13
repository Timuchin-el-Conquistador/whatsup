import React from 'react'
import classes from './index.module.css'

class Logo extends React.Component{
    constructor(props){
        super(props) 
    }
    render(){
        return(
            <React.Fragment>
                  <div className={`${classes.logo}`}>
                      <h1>Salam</h1>
                  </div>
            </React.Fragment>
        )
    }
}

export default Logo
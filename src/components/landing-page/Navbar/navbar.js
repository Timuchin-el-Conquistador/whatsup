
import React from 'react'

import Logo from './Logo/index'
import Auth from './Auth/index'

class Navbar extends React.Component{
    constructor(props){
        super(props) 
    }
    render(){
        return(
           
                    <header className={`d-flex justify-content-between align-items-center ${this.props.className}`}>
                      <Logo/>
                      <Auth/>
                    </header>
           
        )
    }
}

export default Navbar
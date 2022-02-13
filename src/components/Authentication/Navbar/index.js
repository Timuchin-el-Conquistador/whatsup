import React from 'react'

import classes from './index.module.css'

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <div className='d-flex justify-content-center'>
                    <h1 className={`text-success position-absolute ${classes.logo}`}>
                        Salam
                    </h1>
                </div>
            </React.Fragment>

        )
    }
}

export default Navbar
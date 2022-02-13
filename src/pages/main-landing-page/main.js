import React from "react";

import Navbar from "../../components/landing-page/Navbar/navbar";
import  Slider  from "../../components/landing-page/Slider/slider";


import classes from "./main.module.css";
import Avatar from "../../assets/images/avatar.png";

import { withRouter } from "react-router-dom";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
  
        <section className={classes.main_section}>
         <Navbar className={classes.main_navigation}/>
          <div className={classes.main_section_profile}>
            <div className={classes.main_section_profile_info}>
              <img className={classes.main_section_profile_img} src={Avatar} />
              <h1>Hi, I'm Cengiz</h1>
              <p>
                My friends call me Чина. I am friendly and knowledge-thisrty. I
                love doing sport and reading Sci-Fi books, comics and of course
                watching them
              </p>
            </div>
          </div>
        </section>
        <section className={classes.slider_show}>  
         <Slider/>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(LandingPage);

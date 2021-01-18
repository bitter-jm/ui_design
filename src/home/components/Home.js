import React, {Component} from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import "../css/home.css";
import ParallaxHome from "./ParallaxHome";

export default class Home extends Component {

  render() {
    return (
      <div className="Home" style={{backgroundColor:"#121C06"}}>
        <ParallaxProvider>
          <ParallaxHome />
          <div style={{marginBottom:0, height:"22vw"}}></div>
        </ParallaxProvider>
      </div>
    );
  }

}


import React, {Component} from "react";
import {Parallax } from 'react-scroll-parallax';
import "../css/parallaxhome.css";

import FloatingIsland from "./FloatingIsland";

export default class ParallaxHome extends Component {

  render() {
    return (
      <div>
        <div className="parallaxCollection" style={{justifyContent:"center", display:"flex", flexFlow:"row"}}>
          <div className="parallaxCollection" style={{position:"relative", top:0, backgroundColor:"#121C06"}}>

            <Parallax y={[-40,20]} styleOuter={{margin:0, position:"relative",top:-20, left:0, zIndex:1}}>
              <img src={"https://i.ibb.co/VxdRV55/parallax1.png"} 
                alt="parallax1"
                style={{width:"100%", height:"59vw"}}/>
            </Parallax>

            <Parallax y={[-40,40]} styleOuter={{margin:0, position:"absolute",top:-20, left:0, zIndex:2}}>
              <img src={"https://i.ibb.co/JtCC19z/parallax2.png"} 
                alt="parallax2"
                style={{width:"100%", height:"59vw"}}/>
            </Parallax>

            <Parallax y={[-30,30]} styleOuter={{margin:0, position:"absolute",top:-20, left:0, zIndex:3}}>
              <img src={"https://i.ibb.co/rsmjwCf/parallax3.png"} 
                alt="parallax3"
                style={{width:"100%", height:"59vw"}}/>
            </Parallax>

            <Parallax y={[-20,20]} styleOuter={{margin:0, position:"absolute",top:-20, left:0, zIndex:4}}>
              <img src={"https://i.ibb.co/qYwF8Zg/parallax4.png"} 
                alt="parallax4"
                style={{width:"100%", height:"59vw"}}/>
            </Parallax>

            <Parallax y={[-10,10]} styleOuter={{margin:0, position:"absolute",top:-20, left:0, zIndex:5}}>
              <img src={"https://i.ibb.co/pLJBX2F/parallax5.png"} 
                alt="parallax5"
                style={{width:"100%", height:"59vw"}}/>
            </Parallax>

            <Parallax y={[0,0]} styleOuter={{margin:0, position:"absolute",top:-20, left:0, zIndex:6}}>
              <img src={"https://i.ibb.co/5YfxHgM/parallax6.png"} 
                alt="parallax6"
                style={{width:"100%", height:"59vw"}}/>
            </Parallax>

            <Parallax y={[0,0]} styleOuter={{margin:0, position:"absolute",top:-20, left:0, zIndex:7}}>
              <img src={"https://i.ibb.co/Nr1j588/parallax7.png"} 
                alt="parallax7"
                style={{width:"100%", height:"59vw"}}/>
            </Parallax>

            <div style={{position:"absolute",top:"20vw", left:"50%", zIndex:6}}>
              <div style={{position:"relative", left:"-50%"}}>
                <div style={{color:"#fff", fontSize:"7vw", fontWeight:"bold", fontFamily:"Neucha"}}>#<strong style={{color:"lightgreen"}}>TEAM</strong>TREES</div>
                <div style={{color:"#fff", fontSize:"3vw", fontWeight:"bold", fontFamily:"Neucha", textAlign:"center"}}>1$ plants 1 Tree</div>
              </div>
            </div>

            <div style={{margin:0, backgroundColor:"#121C06", height:"22vw", width:"auto", zIndex:8, position:"relative", transform:"translate(0,-25px)", display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
              <FloatingIsland />
            </div>

          </div>
        </div>
        <img src="https://teamtrees.org/img/logo.png" style={{width:"10vw", position:"fixed", top:10, left:10, zIndex:10}} alt="logo"/>
      </div>
    );
  }

}

/*
https://i.ibb.co/VxdRV55/parallax1.png
https://i.ibb.co/JtCC19z/parallax2.png
https://i.ibb.co/rsmjwCf/parallax3.png
https://i.ibb.co/qYwF8Zg/parallax4.png
https://i.ibb.co/pLJBX2F/parallax5.png
https://i.ibb.co/5YfxHgM/parallax6.png
https://i.ibb.co/Nr1j588/parallax7.png

https://i.ibb.co/NF4w9Jc/tree.png
https://i.ibb.co/WphrV0j/tree2.png
https://i.ibb.co/hH24WrN/platform.png

FONTS:
Delius
Neucha

height = width / 1,66693548

<img src="https://teamtrees.org/img/logo.png" style={{width:200, position:"sticky"}}/>
 */
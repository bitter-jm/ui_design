import React, {Component} from "react";
import "../css/buytrees.css";

import TreeGenerator from "./TreeGenerator";

export default class BuyTrees extends Component {

  constructor(props) {
    super(props);
    this.state = {selected:0, customamount:"", width: window.innerWidth, height: window.innerHeight};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onPressButton(index) {
    if (this.state.selected === index) {
      this.setState({selected:0});
      return;
    }
    this.setState({selected: index, customamount:""});
  }

  render() {

    var treeamount = 0;
    if (this.state.selected === 1) treeamount = 5; 
    else if (this.state.selected === 2) treeamount = 20; 
    else if (this.state.selected === 3) treeamount = 50; 
    else if (this.state.selected === 4) treeamount = 100; 
    else if (this.state.selected === 5) {
      if (this.state.customamount > 150) treeamount = 100;
      else treeamount = this.state.customamount;
    } 

    return (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

        <div style={{height: 450, maxWidth:"80vw", width:400, backgroundColor:"#fff", borderRadius:25, display:"flex", flexDirection:"column", alignItems:"center", zIndex:50}} >
          <div style={{fontFamily:"Neucha", fontSize:"200%", fontWeight:"bold", color:"#121C06", marginTop:30}}>JOIN #TEAMTREES!</div>
          <div style={{margin: "15px 30px 0 30px", width: "200px", borderBottomWidth: 2, borderBottomStyle:"solid", borderColor:"#a0a0a0"}}/>
          <div style={{fontFamily:"Roboto", fontSize:"120%", fontWeight:"bold", color:"#404040", marginTop: 15}}>Make a change.</div>
          <div style={{fontFamily:"Roboto", fontSize:"100%", color:"#404040", marginTop: 5}}>With everyone's help we can revert deforestation.</div>
          
          <div style={{display:"flex", flexDirection:"row", alignContent:"center", width: 300, flexWrap:"wrap", justifyContent:"center", marginTop: 20}}>
            <div onClick={() => {this.onPressButton.bind(this)(1)}} style={{width:"100px", height:"40px", backgroundColor: (this.state.selected === 1) ? "#113259" : "#EDF2F7", borderRadius:6, borderColor:"rgba(203,213,224)", borderStyle:"solid",borderWidth:1, margin:10, display:"flex", alignItems:"center", justifyContent:"center", color:(this.state.selected === 1)?"#fff":"#444"}}>5 Trees</div>
            <div onClick={() => {this.onPressButton.bind(this)(2)}} style={{width:"100px", height:"40px", backgroundColor: (this.state.selected === 2) ? "#113259" : "#EDF2F7", borderRadius:6, borderColor:"rgba(203,213,224)", borderStyle:"solid",borderWidth:1, margin:10, display:"flex", alignItems:"center", justifyContent:"center", color:(this.state.selected === 2)?"#fff":"#444"}}>20 Trees</div>
            <div onClick={() => {this.onPressButton.bind(this)(3)}} style={{width:"100px", height:"40px", backgroundColor: (this.state.selected === 3) ? "#113259" : "#EDF2F7", borderRadius:6, borderColor:"rgba(203,213,224)", borderStyle:"solid",borderWidth:1, margin:10, display:"flex", alignItems:"center", justifyContent:"center", color:(this.state.selected === 3)?"#fff":"#444"}}>50 Trees</div>
            <div onClick={() => {this.onPressButton.bind(this)(4)}} style={{width:"100px", height:"40px", backgroundColor: (this.state.selected === 4) ? "#113259" : "#EDF2F7", borderRadius:6, borderColor:"rgba(203,213,224)", borderStyle:"solid",borderWidth:1, margin:10, display:"flex", alignItems:"center", justifyContent:"center", color:(this.state.selected === 4)?"#fff":"#444"}}>100 Trees</div>
          </div>
          <div style={{width:"220px", height:"40px", backgroundColor: (this.state.selected === 5) ? "#113259" : "#EDF2F7", borderRadius:6, borderColor:"rgba(203,213,224)", borderStyle:"solid",borderWidth:1, margin:10, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <input type="number" min="1" onClick={() => {if (this.state.customamount !== "") {this.setState({selected:5})} }} value={this.state.customamount} onChange={(event) => {if(event.target.value < 0) {return;} this.setState({customamount:event.target.value}); if (event.target.value !== "") {this.setState({selected:5});} else {this.setState({selected:0});}}} placeholder="Insert a custom amount" style={{backgroundColor:"rgba(0,0,0,0)", outline:0, borderWidth:0, padding:8, textAlign:"center", color:(this.state.selected === 5)?"#fff":"#444"}}/>
          </div>
          <button style={{marginTop:30, padding:7, width:100, borderRadius:12, outline:0, borderWidth:1, borderColor:"#aaa", backgroundColor:this.state.selected !== 0 ? "#244C91" : "#A3B3CE", fontWeight:"bold", color: this.state.selected !== 0 ? "#fff" : "#555"}}>Next</button>
        
        </div>

        <div style={{height:(1478 - this.state.width)/4}}/>

        <div className="gradient" style={{height:"28vw", width:"100%", backgroundImage: "linear-gradient(to bottom, #121C06, #596b3f)", position:"relative", bottom:220, zIndex:12, marginBottom:-220}} />
        <img src="https://i.ibb.co/NmxfM3G/ground.png" style={{width:"100%", position:"relative", bottom:"10vw", marginBottom: "-10vw", zIndex:20}} />

        <TreeGenerator amount={treeamount} width={this.state.width} />

      </div>
    );
  }

}

// https://i.ibb.co/NmxfM3G/ground.png
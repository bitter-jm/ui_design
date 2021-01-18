import React, {Component} from "react";
import sync from 'css-animation-sync';
import "../css/floatingisland.css";

export default class FloatingIsland extends Component {

    render() {
        sync('islandanimation');
        return (
            <div className="floatingisland" style={{width:"100%" ,overflow:"hidden"}}>
                <div className="islandtext" style={{ zIndex:11, position:"absolute", top:"13vw", left:"50%"}}>
                <div style={{position:"relative", left:"-50%"}}>
                    <div style={{ zIndex:11, display:"flex",  justifyContent:"center", alignItems:"flex-end"}}>
                        <img src="https://i.ibb.co/WphrV0j/tree2.png" style={{width:"4vw", marginRight:"1.5vw"}} alt="tree1"/>
                        <div style={{color:"#fff", textAlign:"center", marginBottom:"1vw", padding:"0.5vw 1vw", margin:"0.5vw", backgroundColor:"rgba(214, 252, 169, 0.3)", borderRadius:"1.2vw"}}>
                            <div style={{fontFamily:"Delius", fontSize:"4vw", fontWeight:"bold"}}>22.606.814</div>
                            <div style={{fontFamily:"Delius", fontSize:"2vw"}}>trees planted!</div>
                        </div>
                        <img src="https://i.ibb.co/NF4w9Jc/tree.png" style={{width:"8vw"}} alt="tree2"/>
                    </div>
                </div>
                </div>

                <div className="island" style={{ zIndex:10, position:"absolute", top:"5.5vw", left:"20vw"}}>
                    <div style={{position:"relative"}}>
                        <img src="https://i.ibb.co/hH24WrN/platform.png" style={{width:"62vw"}} alt="floatingisland"/>
                    </div>
                </div>
            </div>
        );
    }
}


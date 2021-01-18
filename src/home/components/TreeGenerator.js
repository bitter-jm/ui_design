import React, {Component} from "react";
import _ from "lodash";

const treetype = [
"https://i.ibb.co/LQMTKmJ/a1.png",
"https://i.ibb.co/vhyNfhs/a2.png",
"https://i.ibb.co/gWNQPbn/a3.png",
"https://i.ibb.co/syQ06Mz/a4.png",
"https://i.ibb.co/1mV0Ggq/a5.png",
"https://i.ibb.co/DpnSCnf/a6.png",
"https://i.ibb.co/kBn0JpT/a7.png",
"https://i.ibb.co/cg57Bft/a8.png",
"https://i.ibb.co/jWzPWsD/a9.png",
"https://i.ibb.co/JmQ0PTZ/a10.png",
];

export default class TreeGenerator extends Component {

    generateTrees() {
        var trees = [];
        for (let i = 0; i < this.props.amount; i++) {

            //height (6,9)
            const height = _.random(6,9);
            //type tree (0,9)
            const type = _.random(0,9);
            //X coord (-width/2+45,width/2-45)
            const xcoord = _.random(-this.props.width/2+45,this.props.width/2-45)
            //Y coord (4,9)
            const ycoord = _.random(4,9);


            trees.push(<img key={i} src={treetype[type]} style={{height:`${height}vw`, position:"relative", bottom:`${height}vw`, marginBottom: `-${height}vw`, zIndex:30+(6-ycoord), 
                transform: `translate(${xcoord}px,-${ycoord}vw)`}} />);
        }
        return trees;
    }


    render() {
        if (this.props.amount === 0) return (<></>);
        const trees = this.generateTrees();
        return (<>{trees}</>);
    }
}

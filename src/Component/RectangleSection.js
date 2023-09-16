import React from "react";
import {useSelector} from "react-redux";
import "./RectangleSection.css";
import { regionStyle, titleStyle } from "../parametre";

const RectangleSection = () => {
    // Récupérez la valeur du store Redux pour la hauteur des rectangles
    const rectangleHeight = useSelector((state) => { return {'XA': state.game.frame.XA,'XB': state.game.frame.XB,'YA': state.game.frame.YA,'YB': state.game.frame.YB}});
    const rectangles = ['XA', 'XB', 'YA', 'YB'].map((regionName_)=>
      {return (<div 
        class='col m-3'
        style={{ height: rectangleHeight[regionName_]*200+'px', background: regionStyle[regionName_].background, marginBottom: '1px'}}>
          <div style={titleStyle}>{regionName_}</div>
      </div>)});

    return (
        <div class='row m-3 d-flex justify-content-around rectangleContainer'>
          {rectangles}
        </div>
      );
};

export default RectangleSection;
import React from "react";
import {useSelector} from "react-redux";
import "./RectangleSection.css";
import { regionStyle, titleStyle } from "../parametre";

const Rectangle = (regionName) => {
    // Récupérez la valeur du store Redux pour la hauteur des rectangles
    const rectangleHeight = useSelector((state) => { return {'XA': state.game.frame.XA,'XB': state.game.frame.XB,'YA': state.game.frame.YA,'YB': state.game.frame.YB}});
    return (
      <div class=''style={{ height:'50%', display: 'flex', alignItems: 'flex-end'}}>
        <div 
          style={{ height: rectangleHeight[regionName]*200+'px', background: regionStyle[regionName].background, marginBottom: '1px'}}>
          <div style={titleStyle}>{regionName}</div>
        </div>
      </div>
    );
};

export default Rectangle;
import React from "react";
import {useSelector} from "react-redux";
import "./RectangleSection.css";

const RectangleSection = () => {
    // Récupérez la valeur du store Redux pour la hauteur des rectangles
    const rectangleHeight = useSelector((state) => { return {'XA': state.game.frame.XA,'XB': state.game.frame.XB,'YA': state.game.frame.YA,'YB': state.game.frame.YB}});
    return (
        <div class='row m-3 d-flex justify-content-around rectangleContainer'>
          <div class='col m-3' style={{ height: rectangleHeight['XA']*200+'px', backgroundColor: 'red', marginBottom: '1px'}}>XA</div>
          <div class='col m-3' style={{ height: rectangleHeight['XB']*200+'px', backgroundColor: 'green', marginBottom: '1px' }}>XB</div>
          <div class='col m-3' style={{ height: rectangleHeight['YA']*200+'px', backgroundColor: 'blue', marginBottom: '1px' }}>YA</div>
          <div class='col m-3' style={{ height: rectangleHeight['YB']*200+'px', backgroundColor: 'yellow', marginBottom: '1px' }}>YB</div>
        </div>
      );
};

export default RectangleSection;
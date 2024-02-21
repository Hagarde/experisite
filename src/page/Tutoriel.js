import React from "react";
import { useState } from "react";
import { useSelector} from "react-redux";
import "./Game.css";
import DataCard from "../Component/DataCard";
import Rectangle from "../Component/RectangleSection";

const Game = () => {
    // Slider 

    const [inputValueRegion, setInputvalueRegion] = useState(0.5); 
    const [inputValueRegionX, setInputvalueRegionX] = useState(0.5); 
    const [inputValueRegionY, setInputvalueRegionY] = useState(0.5); 

    const state = useSelector((state)=>{return state.game}); // Valeur factices pour 
    
    return (
        <div class="container-fluid all">
            <div class="row">
                <p>
                    Panneau de Jeu
                </p>
            </div>
            <div class="row m-3">
                    <input type="range" max={1} min={0} step={0.01} value={inputValueRegion} onChange={(e)=>{setInputvalueRegion(e.target.value)}} />  
            </div>
            <div class="row second-row" style={{height: "70vh"}}>
                <div class="col-1 slider-vertical ">
                    <input type="range" class="slider sideSlider" orient="vertical"  
                    max={1} min={0} step={0.01} value={inputValueRegionX} onChange={(e)=>{setInputvalueRegionX(e.target.value)}} /> 
                </div>
                <div class="col-4 ">
                    <DataCard regionName={"XA"}/>
                    <DataCard regionName={"XB"}/>
                </div>
                <div class="col ">
                        {Rectangle("XA")}
                        {Rectangle("XB")}
                </div>
                <div class="col ">
                        {Rectangle("YA")}
                        {Rectangle("YB")}
                </div>
                <div class="col-4 ">
                    <DataCard regionName={"YA"}/>
                    <DataCard regionName={"YB"}/>
                </div>
                <div class="col-1 slider-vertical ">
                    <input type="range" class="slider sideSlider" orient="vertical" 
                    max={1} min={0} step={0.01} value={inputValueRegionY} onChange={(e)=>{setInputvalueRegionY(e.target.value)}} /> 
                </div>
            </div>
            <div style={{margin: '5px'}}>
                <button type="submit" disabled value={'Valider la décision'} class="btn btn-primary">Valider</button>
            </div>
        </div>
    )
};

export default Game;
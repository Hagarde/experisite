import React from "react";
import DecisionPanel from "../Component/DecisionPanel";
import Data from "../Component/Data";
import "./Game.css"


const Game = () => {
    return (
        <div class="container">
            <div class="column1" >
                <h1> Data Display </h1>
                <Data/>
            </div>
            <div class="column2" >
                <h1>Decision Panel</h1>
                <DecisionPanel />
            </div>
        </div>
    )
};

export default Game;
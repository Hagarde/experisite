import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import "./RangeSection.css";
import {gameAction} from "../redux/feature/gameSlice";
import * as api from '../redux/api';

const RangeSection = () => {
    const dispatch = useDispatch();

    const [inputValueRegion, setInputvalueRegion] = useState(0.5); 
    const [inputValueRegionX, setInputvalueRegionX] = useState(0.5); 
    const [inputValueRegionY, setInputvalueRegionY] = useState(0.5); 

    const state = useSelector((state)=>{return state.game});

    const getNextDay = () => {
        api.getNextDay(state.frame, state.epidemie, dispatch);
        
    }

    useEffect(()=>{
        dispatch(gameAction.updateTests([inputValueRegion, inputValueRegionX, inputValueRegionY]));
    },[inputValueRegion,inputValueRegionX,inputValueRegionY]);

    return (
        <div class='container'> 
                <div class='row d-flex justify-content-center m-5'>
                    <div class='col'>  Régions X </div>
                    <div class='col-6'> <input type="range" max={1} min={0} step={0.01} value={inputValueRegion} onChange={(e)=>{setInputvalueRegion(e.target.value)}} />  </div>
                    <div class='col'>Régions Y </div>
                </div>
                <div class='row'>
                    <div class='col-6'>
                        <label for='A'> Pop A</label> 
                        <input id='A'type="range" max={1} min={0} step={0.01} value={inputValueRegionX} onChange={(e)=>{setInputvalueRegionX(e.target.value)}} /> 
                        <label for='A'> Pop B</label> 
                    </div>
                    <div class='col'>
                        <label for='B'>Pop A</label> 
                        <input id='B'type="range" max={1} min={0} step={0.01} value={inputValueRegionY} onChange={(e)=>{setInputvalueRegionY(e.target.value)}} /> 
                        <label for='b'>Pop B</label> 
                     </div>
                </div>
            <div class='m-5'></div>
            <input type="submit" onClick={()=>{getNextDay()}} value={'Valider la décision'}/>
        </div>
    )
};

export default RangeSection;
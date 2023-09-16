import axios from "axios";
import {URL_API} from "../parametre.js";
import {gameAction} from './feature/gameSlice';
import { analyticsAction } from "./feature/analyticsSlice.js";
import { utilsAction } from "./feature/utilsSlice";

export const initGame = async ()=> {
    return axios.get(URL_API+'game/init')
        .then(response=>{return response.data})
}

export const getNextDay = async (frame_, epidemie_, dispatch) => {
    axios.post(URL_API+ 'game/play', { frame :frame_ , epidemie: epidemie_})
        .then(response=>{
            dispatch(gameAction.setFrame(response.data));
            dispatch(analyticsAction.setAnalytics({
                newTest : {XA : frame_.XA, XB : frame_.XB, YA : frame_.YA, YB : frame_.YB},
                newPositive : {XA : response.data.P1-frame_.P1, XB : response.data.P2-frame_.P2, YA : response.data.P3-frame_.P3, YB : response.data.P4-frame_.P4}
            }));

            // Je calcule ici les vrais new positif de test (Pt+1--Pt) sans la perte des guéries (RPt+1-RPt) (mais qui est déjà contenue dans P)=> tjrs positif 
            dispatch(utilsAction.setNewPositif({
                XA : response.data.P1 - frame_.P1 + (response.data.RP1 - frame_.RP1), 
                XB : response.data.P2-frame_.P2 + (response.data.RP2 - frame_.RP2), 
                YA : response.data.P3-frame_.P3 + (response.data.RP3 - frame_.RP3), 
                YB : response.data.P4-frame_.P4 + (response.data.RP4 - frame_.RP4)}))
        })
    
};

export const getGraphData = async (id, callback)=>{
    axios.get(URL_API+ 'experience/get/'+id)
        .then(response => {callback(response.data)})
};

export const getEpidemie = async (id) => {
    axios.get(URL_API+'epidemie/getExperience/'+id)
        .then(response=> {return response.data})
}
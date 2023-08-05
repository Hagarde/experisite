import axios from "axios";
import {URL_API, epsilon} from "../parametre.js";
import {gameAction} from './feature/gameSlice';
import { analyticsAction } from "./feature/analyticsSlice.js";

export const initGame = async ()=> {
    return axios.get(URL_API+'game/init')
        .then(response=>{return response.data})
}

export const getNextDay = async (frame_, epidemie_, dispatch) => {
    axios.post(URL_API+ 'game/play', { frame :frame_ , epidemie: epidemie_})
        .then(response=>{
            dispatch(gameAction.setFrame(response.data));
            console.log('Entrons dans la calcul des analytics');
            console.log(response.P1 )
            console.log(response.data)
            console.log(frame_.P1)
            console.log(frame_)
            dispatch(analyticsAction.setAnalytics({
                newTest : {XA : frame_.XA, XB : frame_.XB, YA : frame_.YA, YB : frame_.YB},
                newPositive : {XA : response.data.P1-frame_.P1, XB : response.data.P2-frame_.P2, YA : response.data.P3-frame_.P3, YB : response.data.P4-frame_.P4}
            }))
        })
    
};

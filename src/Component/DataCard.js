import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { regionStyle, titleStyle } from "../parametre";

const DataCard = (props) => {
    const regionName = props.regionName; 

    const t = useSelector(state =>state.game.frame.t);
    const accBoolean = useSelector(state=>state.game.experience.acceleration);

    // Variable calculées
    const [positivity, setPositivity] = useState('Pas encore disponible');
    const [acceleration, setAcceleration] = useState('Pas encore disponible');

    // Variation des variables calculées 
    const [variationPositivity, setVariationPositivity] = useState('');
    const [variationAcceleration, setVariationAcceleration] = useState('');
    // const [variationNewCase, setVariationNewCase] = useState(''); chiant parce que modifier autre part et il faudrait voir la variation à ce moment là 

    // Données nécessaires pour les calculs 
    const newPositif = useSelector((state)=>state.utils.newPositif[regionName]); // Calcul des réels nouveaux cas positifs
    const newTest = useSelector((state)=>state.analytics.newTest[regionName]);
    const cumulatedTest = useSelector((state)=>state.analytics.cumulatedTest[regionName]);
    const cumulatedPositive = useSelector((state)=>state.analytics.cumulatedPositive[regionName]);



    // Calcul des données nécessaire 
    useEffect(()=>{
        // if (t>0){setVariationNewCase()} // Variation dure à avoir 
        if (t>1){setVariationPositivity(newPositif/newTest > positivity ? '↑' : '↓' );};
        setPositivity(newPositif/newTest);

        if (t>2){setVariationAcceleration(cumulatedPositive/cumulatedTest > acceleration ? '↑' : '↓')}
        setAcceleration(cumulatedPositive/cumulatedTest);
        
    },[newPositif, newTest, cumulatedPositive, cumulatedTest,t])
    
    return (
        <div class="col-md-6">
            <div class="card mb-6 ">
                <div class="card-body">
                <p class="list-group-item" style={regionStyle[regionName]}> <div style={titleStyle}> Région {regionName} </div> </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Nouveaux Positives : {Math.floor(newPositif*10000)/100000}</li>
                        <li class="list-group-item"> Positivité : {Math.floor(positivity*10000)/100000} {variationPositivity}</li>
                        {accBoolean === true ? <li class="list-group-item"> Accélération : {Math.floor(acceleration*10000)/100000} {variationAcceleration}</li> : ''}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default DataCard;
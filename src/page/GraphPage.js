import React from 'react';
import Graph from '../Component/Graph'; 
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

const GraphPage = () => {
  let {experienceId} = useParams();
  const experience = JSON.stringify(useSelector(state => state.utils.experience));  
  const epidemie = JSON.stringify(useSelector(state => state.utils.epidemie));  
  return (
    <div>
      <h1>Graphiques d'expérience</h1>
      <p> Experience : {experience} </p>
      <p> Epidémie : {epidemie} </p>
      <Graph experienceId={experienceId} /> {/* Utilisez le composant avec vos données */}
    </div>
  );
};

export default GraphPage;
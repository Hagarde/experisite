import React from 'react';
import Graph from '../Component/Graph'; 
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

const GraphPage = () => {
  let {experienceId} = useParams();
  const utilsData = useSelector(state => state.utils);

  return (
    <div>
      <h1>Graphiques d'expérience</h1>
      <p> Experience : {JSON.stringify(utilsData.experience)} </p>
      <p> Epidémie : {JSON.stringify(utilsData.epidemie)} </p>
      <Graph experienceId={experienceId} /> 
    </div>
  );
};

export default GraphPage;
import React from 'react';
import { useState, useEffect } from 'react';
import * as api from "../redux/api.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = (props) => {
  const [Data, setData] = useState({frames: [],epidemie:{}, experience:{}});
  const dispatch = useDispatch();
  useEffect( ()=>{
    // Je requeste les data 
    api.getGraphData(props.experienceId, setData, dispatch);
  },[])


  const charts = ['XA', 'XB', 'YA', 'YB'].map((region, index) => {
    const regionData = {
      labels: Data.frames.map((item) => item.t), // Les étiquettes sont les valeurs t
      datasets: [
        {
          label: `S - ${region}`,
          data: Data.frames.map((item) => item[`S${index+1}`]),
          borderColor: 'blue',
        },
        {
          label: `U - ${region}`,
          data: Data.frames.map((item) => item[`U${index+1}`]),
          borderColor: 'red',
        },
        {
          label: `P - ${region}`,
          data: Data.frames.map((item) => item[`P${index+1}`]),
          borderColor: 'yellow',
        },
        {
          label: `RU - ${region}`,
          data: Data.frames.map((item) => item[`RU${index+1}`]),
          borderColor: 'green',
        },
        {
          label: `RP - ${region}`,
          data: Data.frames.map((item) => item[`RP${index+1}`]),
          borderColor: 'green',
        },
      ],
    };

    // Définissez les options du graphique
    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Temps (t)',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Valeur',
          },
        },
      },
    };
    return (
      <div key={region} class="col-6">
        <h2>Graphique de l'épidémiologie - Région {region}</h2>
        <Line data={regionData} options={options} />
      </div>
    );
  });

  return <div class="row">{charts}</div>;
};

export default Graph;
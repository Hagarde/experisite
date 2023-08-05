import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";
import { URL_API } from "../parametre";

const Dashboard = () => {

    const [listeEpidemie, setListeEpidemie] = useState([]);
    const [listeExperience, setListeExperience] = useState([]);
    const [listeFrame, setListeFrame] = useState([]);

    const updateType = {'epidemie':setListeEpidemie, 'experience': setListeExperience, 'frame': setListeFrame};
    const listesList = {'epidemie':listeEpidemie, 'experience': listeExperience, 'frame': listeFrame};

    const updateData = (dataType)=> {
      // Mettre à jour l'état avec les éléments reçus depuis l'API
      axios.get(URL_API+dataType+"/get10")
      .then(response => {
        const data = response.data.data === undefined ? response.data : response.data.data ;
        updateType[dataType](data);
      })
      .catch(error => {
        console.error("Erreur lors de la requête :", error);
      });
    };

    const pushData = (dataType)=> {
      const data = {
        'epidemie' : {R: Math.floor(Math.random() * 10) + 1, DD: Math.floor(Math.random() * 10) + 1},
        'experience' : {epidemie: "64cbbeaa7fab31f35b867f9d", migration: ['libre', 'ferme','XY', 'AB'][Math.floor(Math.random() * 4)], t: 0, acceleration : Math.random() < 0.5 ? true : false, initialisation: ['1','4', '12', '42'][Math.floor(Math.random() * 4)]},
        'frame' : {epidemie:"64c6bf91ef542b8ab2b480a6", experience:"64c7ab69185422c90050141a",t:1, population: 10000 }
      }
       // A changer en fonction de chaque model 
      axios.post(URL_API+dataType+"/create", data[dataType])
        .then(response => {
        updateData(dataType);
        console.log("Nouvel élément créé :", response.data);
        })
        .catch(error => {
          console.error("Erreur lors de la requête :", error);
        });
    }

    const deleteDataById = (id,dataType) => {
      axios.delete(URL_API + dataType +"/delete/" + id)
      .then(response => {
        console.log("Épidémie supprimée :", response.data);
        updateData(dataType);
      })
      .catch(error => {
        console.error("Erreur lors de la requête :", error);
      });
    }

    useEffect(() => {
      // Effectuer la requête Axios pour récupérer la liste d'éléments
      updateData('epidemie');
      updateData('experience');
      updateData('frame');
    }, []);


    return (

      
        <div class={'container'}>
          <div class="row align-items-center">
            {['epidemie','experience','frame'].map((WhichData) => {
              //console.log(listesList);
              return (
              <div >
                <button onClick={()=>{pushData(WhichData)}}> Push an {WhichData} </button>
                <h1>Liste des {WhichData} </h1>
                <ul>
                {listesList[WhichData].map(element2 => {
                    return (
                    <div>
                      <td key={element2._id}>{JSON.stringify(element2, null, 2)}</td>
                      <button onClick={()=>{deleteDataById(element2._id, WhichData)}}>
                        SUPPRIMER
                      </button>
                    </div>
                    )
                })}
                </ul>
              </div>
              )})}
          </div>
        </div>
    )
};

export default Dashboard;
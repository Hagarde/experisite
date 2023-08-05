import React from "react";
import { gameAction } from "../redux/feature/gameSlice";
import {useDispatch, useSelector} from "react-redux";
import {initGame} from '../redux/api';
import { Link } from "react-router-dom";
import './Acceuil.css';

const Acceuil = () => {
    const dispatch = useDispatch();
    const state = useSelector((state)=>{return state});
    
    const launchGame = async ()=> {
        const data = await initGame(); 
        dispatch(gameAction.setEpidemie(data.epidemie));
        dispatch(gameAction.setExperience(data.experience));
        dispatch(gameAction.setFrame(data.frame));
    }
    return (
        <body class="text-center">
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header class="masthead mb-auto">
                    <div class="inner">
                    <h3 class="masthead-brand">AMSE</h3>
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link active" href="#">Home</a>
                        <Link to={'/game'}><button type="button" class="btn btn-outline-secondary">Dashboard</button></Link>
                    </nav>
                    </div>
                </header>

                <main role="main" class="inner cover">
                    <h1 class="cover-heading">ExpériSite</h1>
                    <p class="lead"> Bienvenue sur notre site de recherche épidémiologique interactif ! Rejoignez-nous dans cette aventure fascinante pour comprendre comment répartir intelligemment les tests entre différentes régions touchées par une épidémie mystérieuse. </p>
                    <p class="lead">
                    <Link to={'/jeu'}>
                    <button type="button" class="btn btn-outline-success"  onClick={()=>{launchGame()}}>
                        Commencer le jeu ! 
                    </button>
                </Link>
                    </p>
                </main>

                <footer class="mastfoot mt-auto">
                    <div class="inner">
                    <p>Site crée par ORY Victor</p>
                    </div>
                </footer>
            </div>
        </body>
    )
};



export default Acceuil;
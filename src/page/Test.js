
import React from "react";
import "./Test.css"
import DecisionPanel from "../Component/DecisionPanel";
import DataCard from "../Component/DataCard";

const Test = () => {
    return (
        <div class="container">
            <div class='row'>
                <div class='col'>
                    <section class="jumbotron text-center">
                        <h3 class='m-1'> Panneau de décision</h3>
                        <DecisionPanel />
                    </section>
                </div>

                <div class='col-6'>
                    <div class="album py-5 bg-light">
                        <h3> Panneau de contrôle </h3>
                            <div class="container">
                                <div class="row">
                                    {['XA','XB','YA','YB'].map(regionName => {return (
                                        <DataCard regionName={regionName}/>
                                    )})}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Test;
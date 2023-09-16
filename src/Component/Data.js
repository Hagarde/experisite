import React from "react";
import DataCard from "./DataCard";

const Data = () => {    
    const Cards = ['XA','YA','XB','YB'].map(regionName_=>{
        return (<DataCard regionName={regionName_}/>)
    })

    return (
        <div class="container">
            <h1> Data Display </h1>
            {Cards}
        </div>
    )
};

export default Data;
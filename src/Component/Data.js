import React from "react";
import {useDispatch, useSelector} from "react-redux";
import DataCard from "./DataCard";

const Data = () => {    
    const Cards = ['XA','YA','XB','YB'].map(regionName_=>{
        return (<DataCard regionName={regionName_}/>)
    })
    return (
        <div className="container">
            <h1> Data Display </h1>
            {Cards}
        </div>
    )
};

export default Data;
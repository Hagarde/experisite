import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import "./DecisionPanel.css";

import RangeSection from "./RangeSection";
import RectangleSection from "./RectangleSection";

const DecisionPanel = () => {
    const dispatch = useDispatch();
    return (
        <div class="column">
            <div ><RangeSection/> </div>
            <div ><RectangleSection/></div>
        </div>
    )
};

export default DecisionPanel;
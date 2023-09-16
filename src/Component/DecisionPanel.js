import React from "react";
import "./DecisionPanel.css";

import RangeSection from "./RangeSection";
import RectangleSection from "./RectangleSection";

const DecisionPanel = () => {
    return (
        <div class="column">
            <div ><RangeSection/> </div>
            <div ><RectangleSection/></div>
        </div>
    )
};

export default DecisionPanel;
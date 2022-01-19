//import { useState } from "react";


const initialStage = "Asia";
const changeRegions = (state = initialStage, action) => {

    switch (action.type) {
        case "REGIONS": 
            return state = action.value
        default: return state;
    }
}

export default changeRegions
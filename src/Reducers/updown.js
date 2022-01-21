//import { useState } from "react";
import axios from 'axios';

const initialStage = "Asia";
let temp =[];
const changeRegions = (state = initialStage, action) => {

    switch (action.type) {
        case "REGIONS":
            state = action.value;
            axios.get("https://restcountries.com/v3.1/all").then((res) =>{
                temp= res.data.map((e) => { return e.region === state ? e.name.common : null;})
                })
            return {...state,temp};

        default: 
        axios.get("https://restcountries.com/v3.1/all").then((res) =>{
            temp= res.data.map((e) => { return e.region === state ? e.name.common : null;})
            })
        return {...state,temp};  
    }
    
}

export default changeRegions
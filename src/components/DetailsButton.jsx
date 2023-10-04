/* eslint-disable no-unused-vars */
import React from "react";
import {useState, useEffect} from "react";
import "../../src/index.css";
import {useNavigate} from "react-router-dom";

const DetailsButton = ({playerId}) => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(`/${playerId}`)}>
                Find Out More About Me!
            </button>
        </div>
    )
}

export default DetailsButton;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {useState, useEffect} from "react";
import "../../src/index.css";

const DeleteButton = ({playerId, setPlayers, players}) => {

    function deletePuppy() {
        async function deletePlayer () {
            try {
                const response = await fetch(
                    `https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${playerId}`,
                    {method: "DELETE"}
                );
                const result = await response.json();
                if (result.success) {
                    setPlayers(players.filter(player => player.id !== playerId))
                }
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        deletePlayer();
    }

    return (
        <div>
            <button onClick={deletePuppy}>Delete</button>
        </div>
    )
}

export default DeleteButton;

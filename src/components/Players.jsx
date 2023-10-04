/* eslint-disable no-unused-vars */
import React from "react";
import {useState, useEffect} from "react";

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players");
                const result = await response.json();
                console.log(result.data.players);
                setPlayers(result.data.players);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])
    console.log(players)
    return (
        <div>
            {players.map((player) => {
                return (
                    <div key={player.id}>
                        <h6>
                            {player.name}
                        </h6>
                    </div>
                );
            })};
        </div>
    );
  };

  export default Players;


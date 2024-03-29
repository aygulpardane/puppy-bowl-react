/* eslint-disable no-unused-vars */
import React from "react";
import {useState, useEffect} from "react";
import "../../src/index.css";
import DetailsButton from "./DetailsButton";
import DeleteButton from "./DeleteButton";
import SearchForm from "./SearchForm";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [puppyFilter, setPuppyFilter] = useState("");

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
            <SearchForm setPuppyFilter={setPuppyFilter}/>
            <div className="players">
                {players.filter((player) => {
                    return player.name.toLowerCase().includes(puppyFilter.toLowerCase());
                }).map((player) => {
                    return (
                        <div key={player.id} className="player-card">
                            <div className="player-details">
                                <h2> {player.name} </h2>

                                <p>  Breed: {player.breed} </p>

                                <p> Status: {player.status} </p>

                                <DetailsButton playerId={player.id}/>
                                <br/>
                                <DeleteButton playerId={player.id} players={players} setPlayers={setPlayers} />
                                <br/>
                                <img className="player-image" src={player.imageUrl} alt={player.name}/>
                            </div>
                        </div>
                    );
                })};
            </div>
        </div>
    );
  };

  export default Players;


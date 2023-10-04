/* eslint-disable react/prop-types */
import {useState, useEffect} from "react";
import "../../src/index.css";
import {useParams} from "react-router-dom";

const SinglePlayer = () => {
    const [player, setPlayer] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${params.id}`);
                const result = await response.json();
                console.log(result.data.player);
                setPlayer(result.data.player);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <div className="players">
                <div key={player.id} className="player-card">
                    <div className="player-details">
                        <h2> {player.name} </h2>

                        <p>  Breed: {player.breed} </p>

                        <p> Player staus: {player.status} </p>

                        <p> Cohort ID: {player.cohortId} </p>

                        <img className="player-image" src={player.imageUrl} alt={player.name}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePlayer;



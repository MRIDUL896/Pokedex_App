import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import './Pokemondetails.css'
import getPokemonTypeColor from "./color";

const Pokemondetails = () => {
    let [isLoading, set_isLoading] = useState(true);
    let { id } = useParams();
    let pkmn_id = parseInt(id);
    let [pkmn_details, set_pkmn_details] = useState({});
    let [color,setcolor] = useState('black');
    let navigate = useNavigate();

    async function showDetails() {
        try {
            set_isLoading(true);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn_id}`);
            const para = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pkmn_id}`);
            const details = response.data;
            const settingData = {
                id: details.id,
                name: details.name,
                types: details.types.map((typing) => {
                    return {
                        name: typing.type.name
                    }
                }),
                height: details.height,
                img: details.sprites.front_default,
                desk : para.data.flavor_text_entries[0].flavor_text
            }
            console.log(settingData.types[0])
            setcolor(getPokemonTypeColor(settingData.types[0].name));
            console.log(color);
            set_pkmn_details(settingData);
            set_isLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    const changePkmn = (num) => {
        const newId = pkmn_id + num;
        navigate(`/pokemon/${newId}`);
    }

    useEffect(() => {
        showDetails();
    }, [pkmn_id])

    return (
        <div className="details_wrapper">
            <div className="details" style={{backgroundColor : color}}>
            {
                isLoading ? <h2>Loading</h2> : 
                (
                    <>
                        <img className="pkmn_img" src={pkmn_details.img} alt={pkmn_details.name} />
                        <h2>{pkmn_details.id}. {pkmn_details.name}</h2>
                        <h3>Height: {pkmn_details.height}</h3>
                        <h3>Types: {pkmn_details.types && pkmn_details.types.map((type, index) => (
                            <span key={index}>{type.name} </span>
                        ))}</h3>
                        <p>{pkmn_details.desk}</p>
                    </>
                )}
            </div>
            <div className="prvNxt">
                <button disabled={pkmn_id == 1} onClick={() => changePkmn(-1)}>Prev</button>
                <button onClick={() => changePkmn(1)}>Next</button>
            </div>
        </div>
    )
}

export default Pokemondetails;
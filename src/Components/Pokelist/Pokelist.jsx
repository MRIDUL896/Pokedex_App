import { useState , useEffect} from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import "./Pokelist.css"
import Header from "../Header/Header";

const Pokelist = ()=> {
    let [API_URL,setAPI_URL] = useState('https://pokeapi.co/api/v2/pokemon');
    let [prev,setPrev] = useState(null);
    let [next,setNext] = useState(null);
    let [isLoading,set_isLoading] = useState(true);
    let [pkmn_list,set_pkmn_list] = useState([]);

    async function renderPokemons(){
        try{
            set_isLoading(true);
            const response = await axios.get(API_URL);
            const results = response.data.results;
            const dataPromise = results.map((pokemon) => axios.get(pokemon.url));
            const data = await axios.all(dataPromise);
            const setting_data = data.map((pokemon) => {
                return {
                    pkmn_id : pokemon.data.id,
                    pkmn_name : pokemon.data.name,
                    pkmn_image : pokemon.data.sprites.front_default,
                }
            });
            setPrev(response.data.previous);
            setNext(response.data.next);
            set_pkmn_list(setting_data);
            set_isLoading(false);
        }catch(err){
            console.log(err)
        }
    }

    const prevButton = ()=> {
        setAPI_URL(prev);
    }

    const nextButton = ()=> {
        setAPI_URL(next);
    }

    useEffect( ()=> {
        renderPokemons();
    },[API_URL]) ;

    return (
        <div>
            <div className="prvNxt">
                <button disabled={prev==null} onClick={prevButton}>Prev</button>
                <button disabled={next==null} onClick={nextButton}>Next</button>
            </div>
            <div className="pokeListWrapper">
                {
                    (isLoading) ? <h2>Page Loading....</h2> : pkmn_list.map((pokemon) => <Pokemon key={pokemon.pkmn_id} pkmn_id={pokemon.pkmn_id} pkmn_name={pokemon.pkmn_name} pkmn_image={pokemon.pkmn_image} />)
                }
            </div> 
        </div>
    )
}

export default Pokelist;
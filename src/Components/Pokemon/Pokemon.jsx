import { Link } from 'react-router-dom';
import './Pokemon.css'

const Pokemon = ({pkmn_id,pkmn_name,pkmn_image}) => {
    return(
        <Link to={`/pokemon/${pkmn_id}`}>
            <div className="pokemon">
                <h3>{pkmn_id}. {pkmn_name}</h3>
                <img src={pkmn_image} alt="error" />
            </div>
        </Link>
    )
}

export default Pokemon;
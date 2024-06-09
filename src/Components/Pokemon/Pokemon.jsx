import './Pokemon.css'

const Pokemon = ({pkmn_id,pkmn_name,pkmn_image}) => {
    return(
        <div className="pokemon">
            <h3>{pkmn_id}. {pkmn_name}</h3>
            <img src={pkmn_image} alt="" />
        </div>
    )
}

export default Pokemon;
import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="heading">
                <h1>Pokedex</h1>
            </div>
            <div className="search">
                <input id="pkmn" type="text" placeholder="Pokemon name or Pokedex entry" />
            </div>
        </div>
    )
}

export default Header;
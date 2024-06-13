import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="heading">
                <img className='pkdx' src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="" />
            </div>
            <div className="search">
                <input id="pkmn" type="text" placeholder="Pokemon name or Pokedex entry" />
            </div>
        </div>
    )
}

export default Header;
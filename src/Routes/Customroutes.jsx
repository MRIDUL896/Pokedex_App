import { Route, Routes } from "react-router-dom"
import Pokelist from "../Components/Pokelist/Pokelist"
import Pokemondetails from "../Components/Pokemondetails/Pokemondetails";
import Header from "../Components/Header/Header";

const Customroutes = () => {
    return (
        <div style={{backgroundColor : 'rgb(10, 30, 96)'}}>
            <Header />
            <Routes>
                <Route path="/" element={<Pokelist />} />
                <Route path="/pokemon/:id" element={<Pokemondetails />} />
            </Routes>
        </div>
    )
}

export default Customroutes;
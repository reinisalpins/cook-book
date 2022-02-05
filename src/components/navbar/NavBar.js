import React from "react";
import './NavBar.css';
import SearchBar from '../searchBar/SearchBar';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/"><h1 className="heading">Cook Book</h1></Link>
            <SearchBar/>
        </div>
    )
}
export default NavBar
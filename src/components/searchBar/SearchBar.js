import './SearchBar.css';
import React from "react";


const SearchBar = () => {

    return(
     <div className="search-container">
        <p className='search'>Search:</p>
        <input type="text"
     placeholder={"search recipe"}/> 
    </div>
);
    }
    
export default SearchBar;
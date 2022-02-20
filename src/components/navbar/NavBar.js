import React from "react";
import './NavBar.css';

import SearchBar from '../searchBar/SearchBar';
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themeSelector/ThemeSelector";
import { useState } from "react";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;



const NavBar = () => {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };


    return (
        <div className="navbar">
            <Link to="/"><h1 className="heading">Cook Book</h1></Link>
            
           <div className="create-button-container">
               <Link to ="/create"><button className="createbtn">create recipe</button></Link> 


               
            </div> 
            <SearchBar/>

            <div className="theme">
<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <i class="fas fa-lightbulb" onClick={() => themeToggler()}></i>
      </StyledApp>
    </ThemeProvider>
            </div>
        </div>
    )
}
export default NavBar
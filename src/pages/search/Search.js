
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import RecipesList from '../../components/recipesList/RecipesList';
import useFetch from '../../hooks/useFetch';

const SearchPage = () => {

  const {data, isPending, error} = useFetch('http://localhost:8000/recipes');
	
  return (
    <div className="searchh">
    {error && <div className="loading">{ error}</div>}
    {isPending && <div className="loading">Loading...</div>} 
    {data && <RecipesList recipes={data} />}
  </div>
   );
}

export default SearchPage
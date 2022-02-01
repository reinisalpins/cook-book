import react from 'react';
import NavBar from './components/navbar/NavBar'
import RecipesList from './components/recipesList/RecipesList'

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <RecipesList></RecipesList>
    </div>
  );
}

export default App;

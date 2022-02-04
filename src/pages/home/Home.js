import RecipesList from "../../components/recipesList/RecipesList";
import useFetch from "../../hooks/useFetch";
import './Home.css';

const Home = () => {

  const {data, isPending, error} = useFetch('http://localhost:8000/recipes');
  return (
    <div className="home">
      {error && <div className="loading">{ error}</div>}
      {isPending && <div className="loading">Loading...</div>} 
      {data && <RecipesList recipes={data} />}
    </div>
     
  );
}
 
export default Home;

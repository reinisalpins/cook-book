import { Link } from 'react-router-dom';
import './RecipesList.css';


const RecipesList = ({recipes}) => {
    
    return (
        <div className="box-container">
            {recipes.map((recipes) =>(
                <div className="box" key={recipes.id}>
            <h1>{recipes.title}</h1>
            <h3>{recipes.cookingTime} to make</h3>
            <p>{recipes.method}</p>

                <Link to={`/recipes/${recipes.id}`}>
            <button className="cookThis">Cook this</button>
            </Link>
            
            
            </div>
            ))}
 
        </div>
    )
}
export default RecipesList
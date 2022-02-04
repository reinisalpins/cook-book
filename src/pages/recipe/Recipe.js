import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();

  const {data, error, isPending} = useFetch('http://localhost:8000/recipes/'+ id);

  return (
    <div className="box-container1">

      <div className="box1">
        
      
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { data && (
        <article>
          <h1 className="head">{ data.title }</h1>
          <h4 className="time">Takes { data.cookingTime } to cook</h4>
          <p className="ingredients"> { data.ingredients + " " } </p>
          <p className="method"> { data.method } </p>
        </article>
      )}
      
    </div>
    </div>
  );
}
 
export default Recipe;
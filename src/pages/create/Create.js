import { useState } from "react";
import './Create.css';
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [ingredient, SetIngredient]= useState('');
  const [ingredients, SetIngredients]= useState([]);
  const navigate = useNavigate();

  var i=0;

    //ingredientsList on add
const handleAdd = (e) => {
    e.preventDefault();
    if(ingredient !== ''){
        SetIngredients(arr => [...arr, ingredient]);
        SetIngredient('');
    }
}


  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {title, ingredients, method, cookingTime};

    setIsPending(true);

    fetch('http://localhost:8000/recipes', {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(recipe)
    }).then(() => {
        console.log('new blog added')
        setIsPending(false)
    })

    navigate('/')
  }

   


  return (
    <div className="create">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
    <label>Recipe title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

    <label>Recipe ingredients:</label>
        <input className="ingredients"
          type="text"  
          value={ingredient}
          onChange={(e) => SetIngredient(e.target.value)}
        />
       <button type="button" className="add" onClick={handleAdd}>add</button>
        <h4 >Current ingredients: 
            {ingredients.map(e =>
                <span key={i++}>
                    {e} {','}
                </span>
                )}
            </h4> 

    <label>Recipe method:</label>
        <textarea
          required
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        ></textarea>

    <label>Cooking time (in minutes):</label>
        <input 
          type="text" 
          required 
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />

       { !isPending && <button>Submit</button>} 
       { isPending && <button disabled>Adding recipe...</button>} 
      </form>
    </div>
  );
}
 
export default Create;
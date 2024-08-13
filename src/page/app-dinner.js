import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react";


function AppDinner() {

  const [recipe, setRecipe] = useState();



  async function getRandomRecipe() {
    try {

      const apiKey = 'dfaf96e3f3364a92b133663b6ed837ff';

      //making spoonacular api call to get a random recipe
      let resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&type=dinner`);
      console.log(21, resp.data);

      //store the random recipe into the recipe variable
      setRecipe(resp.data.recipes[0]);
    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    getRandomRecipe();
  }, []);



  return (

    <div className="row">
      <h1>GENERATE RANDOM DINNER</h1>

      <button onClick={getRandomRecipe}>
        Generate
      </button>


      <div className="randomRecepieTitle">
        <a className="randomRecepieTitle" target="_blank" rel="noopener noreferrer" href={recipe?.sourceUrl}>
          {recipe?.title}
        </a>
      </div>
      <img src={recipe?.image} />

      <div className="ingredients">
        <div>
          Ingredients:
        </div>
        {recipe?.extendedIngredients.map((ingredient, index) =>
          <span key={index}>

            {index != recipe?.extendedIngredients.length - 1 ? ingredient.name + ", " : ingredient.name}
          </span>
        )}
        {recipe?.analyzedInstructions.map((instruction) =>
          <ol>
            {instruction.steps?.map((step) =>
              <li>
                {step.step}
              </li>
            )}
          </ol>
        )
        }
      </div >
      <div>

      </div>

    </div >

  );
}

export default AppDinner;
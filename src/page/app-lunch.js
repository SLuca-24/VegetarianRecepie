import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react";


function AppLunch() {

  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(true);



  async function getRandomRecipe() {
    try {

      const apiKey = process.env.REACT_APP_FOOT_API_KEY_PERSONAL;

      setLoading(true)
      let resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&type=lunch`);
      console.log(21, resp.data);
      setLoading(false)

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
      <h1>GENERATE RANDOM LUNCH</h1>
  
      <button onClick={getRandomRecipe}>
        Generate
      </button>
  
      {loading && <div>Loading...</div>}
  
      {!loading && recipe && (
        <>
          <div className="randomRecepieTitle">
            <a className="randomRecepieTitle" target="_blank" rel="noopener noreferrer" href={recipe.sourceUrl}>
              {recipe.title}
            </a>
          </div>
          <img src={recipe.image} alt="random-recepie-img" />
          <div className="ingredients">
            <div>Ingredients:</div>
            {recipe.extendedIngredients.map((ingredient, index) =>
              <span key={index}>
                {index !== recipe.extendedIngredients.length - 1 ? ingredient.name + ", " : ingredient.name}
              </span>
            )}
          </div>
          <div>
            {recipe.analyzedInstructions.map((instruction, index) =>
              <ol key={index}>
                {instruction.steps.map((step, stepIndex) =>
                  <li key={stepIndex}>
                    {step.step}
                  </li>
                )}
              </ol>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default AppLunch;
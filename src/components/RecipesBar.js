import React, { useState, useEffect } from 'react';
import './RecipesBar.css';
import RecipeComponent from './RecipeComponent.js';
import axios from 'axios';

export default function RecipesBar() {

    // useEffect(() => {
    //     let options = {
    //         method: 'GET',
    //         url: 'https://tasty.p.rapidapi.com/recipes/list',
    //         params: { from: '0', size: '1', tags: 'vegan' },
    //         headers: {
    //             'x-rapidapi-key': 'b1467950cdmsh52b1bb904a3d2d0p17f082jsndcb67a388af6',
    //             'x-rapidapi-host': 'tasty.p.rapidapi.com'
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //         setRecipes(response.data.results)
    //     }).catch(function (error) {
    //         // console.error(error);
    //     });
    // }, []);

    const [recipes, setRecipes] = useState([]);
    // const [recipeName, setRecipeName] = useState('');
    // const [recipeCategories, setRecipeCategories] = useState(['category', ' category']);
    // const [recipeStars, setRecipeStars] = useState(2);
    // const [recipeTime, setRecipeTime] = useState('1h 30m');

    return (
        <div className='recipes-container'>
            <div className="recipes-header">
                <h3>Recipes</h3>
                <p>Search and find best recipes for healthy and delicious meals</p>
            </div>
            <div className="recipes-flex">

                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url}
                />)}

            </div>
        </div>
    )
}

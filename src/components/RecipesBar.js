import React, { useState, useEffect } from 'react';
import './RecipesBar.css';
import RecipeComponent from './RecipeComponent.js';
import axios from 'axios';
import BasicPagination from './Pagination';
import { imageListClasses } from '@mui/material';

import LoadingGif from './loading.gif'

export default function RecipesBar() {

    useEffect(() => {
        setLoading(true)
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '0', size: '20', tags: 'oven' },
            headers: {
                'x-rapidapi-key': 'b1467950cdmsh52b1bb904a3d2d0p17f082jsndcb67a388af6',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {

            console.log(response.data);
            setRecipes(response.data.results)
            setLoading(false)
        }).catch(function (error) {
            // console.error(error);
        });
    }, []);
    // useEffect(() => {
    //     axios.request('https://api.spoonacular.com/recipes/complexSearch', { headers: { 'apiKey': '2fa022adeafe4f239feda6ec91af2d5d' } }).then(function (response) {
    //         console.log(response.data);
    //         // setRecipes(response.data.results)
    //     }).catch(function (error) {
    //         // console.error(error);
    //     });
    // }, []);

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setSetCurrentPage] = useState(1);
    const [recipesPerPage] = useState(10);

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const handleChange = (pageNumber) => setSetCurrentPage(pageNumber)

    return (
        <div className='recipes-container'>
            <div className="recipes-header">
                <h3>Recipes</h3>
                <p>Search and find best recipes for healthy and delicious meals</p>
            </div>
            <div className="recipes-flex">
                {loading ? <img src={LoadingGif} className='loading-gif' alt="loading..." /> : null}


                {currentRecipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url}
                />)}


                {!loading && <BasicPagination
                    recipesPerPage={recipesPerPage}
                    totalRecipes={recipes.length}
                    handleChange={handleChange}
                />}

            </div>
        </div>
    )
}

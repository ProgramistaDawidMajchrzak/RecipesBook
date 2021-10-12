import React, { useState, useEffect } from 'react';
import './RecipesBar.css';
import RecipeComponent from './RecipeComponent.js';
import axios from 'axios';
import BasicPagination from './Pagination';

import LoadingGif from './loading.gif';

export default function RecipesBar() {

    const recipesTrue = [];

    const [recipes] = useState(recipesTrue);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(10);

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    useEffect(() => {
        setLoading(true);

        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '50', size: '30', tags: 'dinner' },
            headers: {
                'x-rapidapi-key': '9f6685a06cmshfb30d08e64f664ep146ae5jsnf8998893214f',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {

            recipesTrue.push(...response.data.results)
            Paginate()
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);
    useEffect(() => {
        setLoading(true);
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '50', size: '20', tags: 'stove_top' },
            headers: {
                'x-rapidapi-key': '9f6685a06cmshfb30d08e64f664ep146ae5jsnf8998893214f',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            recipesTrue.push(...response.data.results)
            setLoading(false)
            Paginate()
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const [pageNumbers, setPageNumbers] = useState();

    const Paginate = () => {
        const totalRecipes = recipes.length
        let i = totalRecipes / recipesPerPage + ((totalRecipes % recipesPerPage === 0) ? 0 : 1);
        return (setPageNumbers(i))

    };

    const handleChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className='recipes-container' id='recipes-bar'>
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
                    recipeRating={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url}
                    recipeDescription={recipe.description}
                    recipeIngredients={recipe.sections[0]}
                    recipeInstructions={recipe.instructions}
                />)}
            </div>
            <BasicPagination
                pageNumbers={pageNumbers}
                handleChange={handleChange} />
        </div>
    )
}

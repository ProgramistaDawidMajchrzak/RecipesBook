import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import RecipeComponent from './RecipeComponent';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CaruselComponent.css';

import LoadingGif from './loading.gif';

function GrillComponent() {

    useEffect(() => {
        setLoading(true)
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '0', size: '10', tags: 'grill' },
            headers: {
                'x-rapidapi-key': 'b1467950cdmsh52b1bb904a3d2d0p17f082jsndcb67a388af6',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setRecipes(response.data.results)
            setLoading(false)
            console.log(response.data.results)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const myRef = useRef();

    const handlePrev = () => {
        const slide = myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if (slide.scrollLeft <= 0) {
            slide.scrollLeft = slide.scrollWidth;
        }
    }
    const handleNext = () => {
        const slide = myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
            slide.scrollLeft = 0;
        }
    }

    return (
        <>
            {loading ? <img src={LoadingGif} className='nav-loading-gif' alt="loading..." /> : null}
            <div className='slider' ref={myRef}>
                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeRating={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url}
                    recipeDescription={recipe.description}
                    recipeIngredients={recipe.sections[0]} // [2] map() -> lista -> .raw_text
                    recipeInstructions={recipe.instructions} // map() -> .display_text
                />)}
            </div>
            <button onClick={handlePrev} className='quick-section-left-button button'><FontAwesomeIcon className={'button-left-arrow'} icon={faChevronLeft} size={'2x'} /></button>
            <button onClick={handleNext} className='quick-section-right-button button'><FontAwesomeIcon className={'button-right-arrow'} icon={faChevronRight} size={'2x'} /></button>
        </>
    )
}

function VegeComponent() {
    useEffect(() => {
        setLoading(true)
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '0', size: '15', tags: 'vegan' },
            headers: {
                'x-rapidapi-key': 'b1467950cdmsh52b1bb904a3d2d0p17f082jsndcb67a388af6',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setRecipes(response.data.results)
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const myRef = useRef();

    const handlePrev = () => {
        const slide = myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if (slide.scrollLeft <= 0) {
            slide.scrollLeft = slide.scrollWidth;
        }
    }
    const handleNext = () => {
        const slide = myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
            slide.scrollLeft = 0;
        }
    }

    return (
        <>
            {loading ? <img src={LoadingGif} className='nav-loading-gif' alt="loading..." /> : null}
            <div className='slider' ref={myRef}>
                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeRating={recipe.user_ratings}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url}
                    recipeDescription={recipe.description}
                    recipeIngredients={recipe.sections[0]}
                    recipeInstructions={recipe.instructions}
                />)}
            </div>
            <button onClick={handlePrev} className='quick-section-left-button button'><FontAwesomeIcon className={'button-left-arrow'} icon={faChevronLeft} size={'2x'} /></button>
            <button onClick={handleNext} className='quick-section-right-button button'><FontAwesomeIcon className={'button-right-arrow'} icon={faChevronRight} size={'2x'} /></button>
        </>
    )
}

function SweetComponent() {
    useEffect(() => {
        setLoading(true)
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '10', size: '10', tags: 'indulgent_sweets' },
            headers: {
                'x-rapidapi-key': 'b1467950cdmsh52b1bb904a3d2d0p17f082jsndcb67a388af6',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setRecipes(response.data.results)
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const myRef = useRef();

    const handlePrev = () => {
        const slide = myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if (slide.scrollLeft <= 0) {
            slide.scrollLeft = slide.scrollWidth;
        }
    }
    const handleNext = () => {
        const slide = myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
            slide.scrollLeft = 0;
        }
    }

    return (
        <>
            {loading ? <img src={LoadingGif} className='nav-loading-gif' alt="loading..." /> : null}
            <div className='slider' ref={myRef}>
                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeRating={recipe.user_ratings}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url}
                    recipeDescription={recipe.description}
                    recipeIngredients={recipe.sections[0]} // [2] map() -> lista -> .raw_text
                    recipeInstructions={recipe.instructions} // map() -> .display_text
                />)}
            </div>
            <button onClick={handlePrev} className='quick-section-left-button button'><FontAwesomeIcon className={'button-left-arrow'} icon={faChevronLeft} size={'2x'} /></button>
            <button onClick={handleNext} className='quick-section-right-button button'><FontAwesomeIcon className={'button-right-arrow'} icon={faChevronRight} size={'2x'} /></button>
        </>
    )
}

function BestComponent() {
    useEffect(() => {
        setLoading(true)
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '0', size: '10', tags: 'oven' },
            headers: {
                'x-rapidapi-key': 'b1467950cdmsh52b1bb904a3d2d0p17f082jsndcb67a388af6',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setRecipes(response.data.results)
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const myRef = useRef();

    const handlePrev = () => {
        const slide = myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if (slide.scrollLeft <= 0) {
            slide.scrollLeft = slide.scrollWidth;
        }
    }
    const handleNext = () => {
        const slide = myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
            slide.scrollLeft = 0;
        }
    }

    return (
        <>
            {loading ? <img src={LoadingGif} className='nav-loading-gif' alt="loading..." /> : null}
            <div className='slider' ref={myRef}>
                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeRating={recipe.user_ratings}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url}
                    recipeDescription={recipe.description}
                    recipeIngredients={recipe.sections[0]} // [2] map() -> lista -> .raw_text
                    recipeInstructions={recipe.instructions} // map() -> .display_text
                />)}
            </div>
            <button onClick={handlePrev} className='quick-section-left-button button'><FontAwesomeIcon className={'button-left-arrow'} icon={faChevronLeft} size={'2x'} /></button>
            <button onClick={handleNext} className='quick-section-right-button button'><FontAwesomeIcon className={'button-right-arrow'} icon={faChevronRight} size={'2x'} /></button>
        </>
    )
}
export { GrillComponent, VegeComponent, SweetComponent, BestComponent };

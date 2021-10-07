import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import RecipeComponent from './RecipeComponent';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CaruselComponent.css';

function GrillComponent() {

    useEffect(() => {
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '10', size: '30', tags: 'grill' },
            headers: {
                'x-rapidapi-key': '6f1b3c41acmsh37bc0afeef8b7dfp18af0ajsne42b76787c15',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setRecipes(response.data.results)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const [recipes, setRecipes] = useState([]);

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
            <div className='slider' ref={myRef}>
                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url}
                    recipeIngredients={recipe.sections} // [2] map() -> lista -> .raw_text
                    recipeInstructions={recipe.instructions} // map() -> .display_text
                />)}
            </div>
            <button onClick={handlePrev} className='quick-section-left-button button'><FontAwesomeIcon className={'button-left-arrow'} icon={faChevronLeft} size={'2x'} /></button>
            <button onClick={handleNext} className='quick-section-right-button button'><FontAwesomeIcon className={'button-right-arrow'} icon={faChevronRight} size={'2x'} /></button>
        </>
    )
}

function VegeComponent() {
    // useEffect(() => {
    //     let options = {
    //         method: 'GET',
    //         url: 'https://tasty.p.rapidapi.com/recipes/list',
    //         params: { from: '0', size: '20', tags: 'vegan' },
    //         headers: {
    //             'x-rapidapi-key': '6f1b3c41acmsh37bc0afeef8b7dfp18af0ajsne42b76787c15',
    //             'x-rapidapi-host': 'tasty.p.rapidapi.com'
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //         setRecipes(response.data.results)
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, []);

    const [recipes, setRecipes] = useState([])

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
            <div className='slider' ref={myRef}>
                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url} />)}
            </div>
            <button onClick={handlePrev} className='quick-section-left-button button'><FontAwesomeIcon className={'button-left-arrow'} icon={faChevronLeft} size={'2x'} /></button>
            <button onClick={handleNext} className='quick-section-right-button button'><FontAwesomeIcon className={'button-right-arrow'} icon={faChevronRight} size={'2x'} /></button>
        </>
    )
}

function SweetComponent() {
    // useEffect(() => {
    //     let options = {
    //         method: 'GET',
    //         url: 'https://tasty.p.rapidapi.com/recipes/list',
    //         params: { from: '10', size: '30', tags: 'inguldent_sweets' },
    //         headers: {
    //             'x-rapidapi-key': '6f1b3c41acmsh37bc0afeef8b7dfp18af0ajsne42b76787c15',
    //             'x-rapidapi-host': 'tasty.p.rapidapi.com'
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //         setRecipes(response.data.results)
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, []);

    const [recipes, setRecipes] = useState([])

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
            <div className='slider' ref={myRef}>
                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url} />)}
            </div>
            <button onClick={handlePrev} className='quick-section-left-button button'><FontAwesomeIcon className={'button-left-arrow'} icon={faChevronLeft} size={'2x'} /></button>
            <button onClick={handleNext} className='quick-section-right-button button'><FontAwesomeIcon className={'button-right-arrow'} icon={faChevronRight} size={'2x'} /></button>
        </>
    )
}

function BestComponent() {
    useEffect(() => {
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '10', size: '20', tags: 'dinner' },
            headers: {
                'x-rapidapi-key': '6f1b3c41acmsh37bc0afeef8b7dfp18af0ajsne42b76787c15',
                'x-rapidapi-host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setRecipes(response.data.results)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const [recipes, setRecipes] = useState([])

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
            <div className='slider' ref={myRef}>
                {recipes.map(recipe => <RecipeComponent
                    key={recipe.id}
                    recipeName={recipe.name}
                    recipeFirstCategory={recipe.tags[0].name}
                    recipeSecondCategory={recipe.tags[1].name}
                    recipeStars={recipe.user_ratings}
                    recipeImage={recipe.thumbnail_url} />)}
            </div>
            <button onClick={handlePrev} className='quick-section-left-button button'><FontAwesomeIcon className={'button-left-arrow'} icon={faChevronLeft} size={'2x'} /></button>
            <button onClick={handleNext} className='quick-section-right-button button'><FontAwesomeIcon className={'button-right-arrow'} icon={faChevronRight} size={'2x'} /></button>
        </>
    )
}
export { GrillComponent, VegeComponent, SweetComponent, BestComponent };

import React, { useContext } from 'react';
import './RecipeComponent.css';
import './FontAwesomeIcons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SidebarActiveContext } from './SidebarActiveContext';

export default function RecipeComponent({ recipeName, recipeFirstCategory, recipeSecondCategory, recipeImage, recipeIngredients, recipeInstructions, recipeDescription, recipeRating }) {


    const { setSidebarActive, setActiveRecipe } = useContext(SidebarActiveContext);

    const activeRecipe = {
        name: recipeName,
        img: recipeImage,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
        description: recipeDescription
    }

    const handleClick = () => {
        setSidebarActive(true);
        setActiveRecipe(activeRecipe);
    };

    const amountOfRates = recipeRating.count_positive + recipeRating.count_negative;

    return (
        <>
            <div onClick={() => handleClick()} className="recipe-box">
                <div className="recipe-img">
                    <img src={recipeImage} alt="img" />
                    <div className="img-opacity"></div>
                </div>
                <div className="recipe-info">
                    <h4 className='recipe-name'>{recipeName}</h4>
                    <p className='recipe-categories'>{`${recipeFirstCategory}  • ${recipeSecondCategory}`}</p>
                    <div className="recipe-bottom-info">
                        <div className="recipe-stars">
                            <FontAwesomeIcon icon={faStar} color={recipeRating.score >= .2 ? 'var(--orange)' : 'var(--black)'} />
                            <FontAwesomeIcon icon={faStar} color={recipeRating.score >= .4 ? 'var(--orange)' : 'var(--black)'} />
                            <FontAwesomeIcon icon={faStar} color={recipeRating.score >= .6 ? 'var(--orange)' : 'var(--black)'} />
                            <FontAwesomeIcon icon={faStar} color={recipeRating.score >= .8 ? 'var(--orange)' : 'var(--black)'} />
                            <FontAwesomeIcon icon={faStar} color={recipeRating.score === 1 ? 'var(--orange)' : 'var(--black)'} /> ( <span>{amountOfRates}</span> )
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import './RecipeComponent.css';
import './FontAwesomeIcons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function RecipeComponent({ recipeName, recipeFirstCategory, recipeSecondCategory, recipeTime, recipeImage }) {

    const recipeRatings = [0, 1, 2, 3, 4, 5]
    const recipeStars = recipeRatings[Math.floor(Math.random() * recipeRatings.length)];

    return (
        <>
            <div className="recipe-box">
                <div className="recipe-img">
                    <img src={recipeImage} alt="img" />
                    <div className="img-opacity"></div>
                </div>
                <div className="recipe-info">
                    <h4 className='recipe-name'>{recipeName}</h4>
                    <p className='recipe-categories'>{`${recipeFirstCategory}  • ${recipeSecondCategory}`}</p>
                    <div className="recipe-bottom-info">
                        <div className="recipe-stars">
                            <FontAwesomeIcon icon={faStar} color={recipeStars >= 1 ? 'var(--orange)' : 'var(--black)'} />
                            <FontAwesomeIcon icon={faStar} color={recipeStars >= 2 ? 'var(--orange)' : 'var(--black)'} />
                            <FontAwesomeIcon icon={faStar} color={recipeStars >= 3 ? 'var(--orange)' : 'var(--black)'} />
                            <FontAwesomeIcon icon={faStar} color={recipeStars >= 4 ? 'var(--orange)' : 'var(--black)'} />
                            <FontAwesomeIcon icon={faStar} color={recipeStars === 5 ? 'var(--orange)' : 'var(--black)'} />
                        </div>
                        <p className="recipe-time">{recipeTime}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

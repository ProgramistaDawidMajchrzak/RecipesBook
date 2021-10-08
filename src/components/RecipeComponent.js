import React, { useContext } from 'react';
import './RecipeComponent.css';
import './FontAwesomeIcons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SidebarActiveContext } from './SidebarActiveContext';
import { RecipeActiveContext } from './SidebarActiveContext';


export default function RecipeComponent({ recipeName, recipeFirstCategory, recipeSecondCategory, recipeTime, recipeImage, recipeIngredients, recipeInstructions, recipeDescription }) {

    const recipeRatings = [0, 1, 2, 3, 4, 5]
    const recipeStars = recipeRatings[Math.floor(Math.random() * recipeRatings.length)];

    const { setSidebarActive } = useContext(SidebarActiveContext);
    const { setActiveRecipe } = useContext(RecipeActiveContext);

    const activeRecipe = {
        name: recipeName,
        img: recipeImage,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
        description: recipeDescription
    }

    const handleCkick = () => {
        setSidebarActive(true);
        setActiveRecipe(activeRecipe);
        console.log(recipeName)
    };



    return (
        <>
            <div onClick={() => handleCkick()} className="recipe-box">
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

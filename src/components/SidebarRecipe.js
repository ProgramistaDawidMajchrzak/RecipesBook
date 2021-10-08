import React, { useContext, useState } from 'react';
import './SidebarRecipe.css';
import { SidebarActiveContext } from './SidebarActiveContext';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidebarRecipe() {

    const { sidebarActive, setSidebarActive, activeRecipe } = useContext(SidebarActiveContext);

    return (
        <div className={`sidebar-recipe ${sidebarActive ? `sidebar-show-animation` : `sidebar-hide-animation`}`}>
            <div className="sidebar-recipe-info">
                <button onClick={() => setSidebarActive(false)}><FontAwesomeIcon icon={faTimes} /></button>
                <h3>{activeRecipe.name}</h3>
                <div className="sidebar-flex">
                    <div className="sidebar-recipe-info-ingredients">
                        <h4>Ingredients</h4>
                        <ul>
                            {activeRecipe.ingredients[0].components.map(i => <li>{i.raw_text}</li>)}
                        </ul>
                    </div>
                    <div className="sidebar-recipe-info-instructions">
                        <ul>
                            {activeRecipe.instructions.map(i =>
                                <div key={i.position} className="sidebar-info-instruction-element">
                                    <p>{i.position}</p>
                                    <li>{i.display_text}</li>
                                </div>)}
                        </ul>
                    </div>
                </div>
            </div >
            <div className="sidebar-recipe-img">
                <img src={activeRecipe.img} alt="img" />
            </div>
        </div >
    )
}


// const Ingredient = (props) => {
//     return (
//         <li>{props.i}</li>
//     )
// }

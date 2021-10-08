import React, { useContext } from 'react';
import './SidebarRecipe.css';
import { SidebarActiveContext } from './SidebarActiveContext';
import { RecipeActiveContext } from './SidebarActiveContext';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidebarRecipe() {

    const { sidebarActive, setSidebarActive } = useContext(SidebarActiveContext)
    const { activeRecipe } = useContext(RecipeActiveContext)

    const instruction = activeRecipe.instructions;

    return (
        <div className={`sidebar-recipe ${sidebarActive ? `sidebar-show-animation` : `sidebar-hide-animation`}`}>
            <div className="sidebar-recipe-info">
                <button onClick={() => setSidebarActive(false)}><FontAwesomeIcon icon={faTimes} /></button>
                <h3>{activeRecipe.name}</h3>
                <p>{activeRecipe.description}</p>
                <div className="sidebar-flex">
                    <div className="sidebar-recipe-info-ingredients"></div>
                    <div className="sidebar-recipe-info-instructions">
                        <ul>
                            {/* {instruction.map(i =>
                                <div key={i.position} className="sidebar-info-instruction-element">
                                    <p>{i.position}</p>
                                    <li>{i.display_text}</li>
                                </div>)} */}
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

// const InstructionElement = (props) => {
//     return (
//         <div className="sidebar-info-instruction-element">
//             <p>{i.position}</p>
//             <li key={i.position}>{i.display_text}</li>
//         </div>
//     )
// }

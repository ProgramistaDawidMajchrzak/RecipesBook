import React, { useContext } from 'react';
import './SidebarRecipe.css';
import { SidebarActiveContext } from './SidebarActiveContext';
import { RecipeActiveContext } from './SidebarActiveContext';



export default function SidebarRecipe() {

    const { sidebarActive, setSidebarActive } = useContext(SidebarActiveContext)
    const { activeRecipe } = useContext(RecipeActiveContext)

    return (
        <div className={`sidebar-recipe ${sidebarActive ? `sidebar-show-animation` : `sidebar-hide-animation`}`}>
            <div className="sidebar-recipe-info">
                <button onClick={() => setSidebarActive(false)}>x</button>
                <h3>{activeRecipe.name}</h3>
            </div>
            <div className="sidebar-recipe-img">
                <img src={activeRecipe.img} alt="img" />
            </div>
        </div>
    )
}


import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import QuickMenuNav from './QuickMenu';
import RecipesBar from './RecipesBar';
import SidebarRecipe from './SidebarRecipe';
import { SidebarActiveContext } from './SidebarActiveContext';
import { RecipeActiveContext } from './SidebarActiveContext';


function App() {

  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState({});


  return (
    <>
      <Header />
      <SidebarActiveContext.Provider value={{ sidebarActive, setSidebarActive }}>
        <RecipeActiveContext.Provider value={{ activeRecipe, setActiveRecipe }}>
          <SidebarRecipe />
          <QuickMenuNav />
          <RecipesBar />
        </RecipeActiveContext.Provider>
      </SidebarActiveContext.Provider>
    </>
  );
}

export default App;

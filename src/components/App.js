
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import QuickMenuNav from './QuickMenu';
import RecipesBar from './RecipesBar';
import SidebarRecipe from './SidebarRecipe';
import { SidebarActiveContext } from './SidebarActiveContext';

function App() {

  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState({ instructions: [{ position: 1, display_text: '' }], ingredients: { components: [{ position: 1, raw_text: '' }] } });

  return (
    <>
      <SidebarActiveContext.Provider value={{ sidebarActive, setSidebarActive, activeRecipe, setActiveRecipe }}>
        <Header />
        <SidebarRecipe />
        <QuickMenuNav />
        <RecipesBar />
      </SidebarActiveContext.Provider>
    </>
  );
}

export default App;

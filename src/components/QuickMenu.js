import React from 'react';
import './FontAwesomeIcons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faDrumstickBite, faLeaf, faStar } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './QuickMenu.css';
import { GrillComponent, VegeComponent, SweetComponent, BestComponent } from './CaruselComponents'

export default function QuickMenuNav() {
    return (
        <>
            <Router>
                <div className="quick-navbar">
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact><FontAwesomeIcon className='nav-icon' icon={faDrumstickBite} />  GRILL</NavLink></li>
                            <li><NavLink to='/vege'><FontAwesomeIcon className='nav-icon' icon={faLeaf} /> VEGE</NavLink></li>
                            <li><NavLink to='/sweet'><FontAwesomeIcon className='nav-icon' icon={faCookieBite} /> SWEET</NavLink></li>
                            <li><NavLink to='/best'><FontAwesomeIcon className='nav-icon' icon={faStar} /> BEST</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="quick-section">

                    <Switch>
                        <Route path='/' exact component={GrillComponent} />
                        <Route path='/vege' component={VegeComponent} />
                        <Route path='/sweet' component={SweetComponent} />
                        <Route path='/best' component={BestComponent} />
                    </Switch>
                </div>
            </Router>

        </>
    )
}

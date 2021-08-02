import React from 'react';
import './Header.css';
import Logo from '../images/recipes-book-logo.svg';
import './FontAwesomeIcons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <>
            <div className="container">
                <div className="logo-box">
                    <div className="logo-space">
                        <img src={Logo} alt="logo" className='logo' />
                    </div>
                </div>
                <div style={{ backgroundImage: `url("/header-bg-image.jpg")` }} className="main">

                    <div className="main-side">
                        <h3>What's your plan to cook today?</h3>
                        <div className="search-input">
                            <input placeholder='Search recipe' type="text" />
                            <button><FontAwesomeIcon icon={faSearch} color={'#f1f1f1'} /></button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

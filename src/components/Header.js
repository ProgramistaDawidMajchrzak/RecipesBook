import React from 'react';
import './Header.css';
import Logo from '../images/recipes-book-logo.svg';
import './FontAwesomeIcons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-scroll';

export default function Header() {

    return (
        <>
            <div className="container">
                <div className="logo-box">
                    <img src={Logo} alt="logo" className='logo' />
                </div>
                <div style={{ backgroundImage: `url("/header-bg-image.jpg")` }} className="main">

                    <div className="main-side">
                        <h3>Find recipe and enjoy your meal</h3>

                        <Link
                            to="recipes-bar"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <button ><FontAwesomeIcon icon={faSearch} color={'#f1f1f1'} /></button>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}

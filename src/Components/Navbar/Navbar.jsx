import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='logo'>
                    <h1>
                        <Link to='/'>MovieDb</Link>
                    </h1>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link to='/'>Popular</Link>
                        </li>
                        <li>
                            <Link to='/top'>Top Rated</Link>
                        </li>
                        <li>
                            <Link to='/upcoming'>Upcoming</Link>
                        </li>
                    </ul>
                    <input
                        type='search'
                        className='search-box'
                        placeholder='Movie Name'
                    />
                    <button id='search'>Search</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

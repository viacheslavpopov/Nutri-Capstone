import React from 'react';
import { logo } from './../img/images';
// import { FaAlignRight } from 'react-icons/fa';
import './App.css';

function NavBar() {
    return (
        <>
            <div class="nav-bar">
                <img src={logo} alt="nutri logo" />
            </div>
        </>
    );
}

export default NavBar;
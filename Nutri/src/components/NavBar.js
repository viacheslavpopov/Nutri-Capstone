import React from 'react';
import { logo } from './../img/images';
// import { FaAlignRight } from 'react-icons/fa';
// import './App.css';

function NavBar() {
    return (
        <>
            <img src={logo} alt="nutri logo" />
            <div className="nav-bar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/resources#">Resources</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/help#">Help</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about#">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
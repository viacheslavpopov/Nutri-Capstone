import React from 'react';
import { logo } from './../img/images';
// import { FaAlignRight } from 'react-icons/fa';
// import './App.css';

function NavBar() {
    return (
        <>
            <img src={logo} alt="nutri logo" />
            <div className="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/resources#">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/help#">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about#">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
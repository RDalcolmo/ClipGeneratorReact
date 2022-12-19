import React from 'react';
import './NavMenu.css';

function NavMenu()
{
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <a href='/' className="navbar-brand">Clip Generator</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-end">
                    <ul className="navbar-nav flex-grow">
                        <li className="nav-item">
                            <a href='/' className="nav-link text-dark">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavMenu;
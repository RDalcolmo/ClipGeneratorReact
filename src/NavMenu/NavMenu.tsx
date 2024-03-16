import React from 'react';
import './NavMenu.css';
import { Link, Outlet } from 'react-router-dom';
function NavMenu()
{
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <Link to='/' className="navbar-brand">Clip Command Generator</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-end">
                    <ul className="navbar-nav flex-grow">
                        <li className="nav-item">
                            <Link to='/' className="nav-link text-dark">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    );
}

export default NavMenu;
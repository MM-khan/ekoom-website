import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm shadow p-2 mb-5 bg-white rounded">
                <div className='container-fluid'>
                    <Link className="navbar-brand text-primary fs-5" to="/">EKOOM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-2 ms-auto p-2">
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

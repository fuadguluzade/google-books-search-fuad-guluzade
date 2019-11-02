import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">Google Books</Link>
            <div className="navbar-nav">
                <Link to="/search" className="nav-item nav-link" >Search</Link>
                <Link to="/saved" className="nav-item nav-link" >Saved</Link>
            </div>
        </nav>
    )
}
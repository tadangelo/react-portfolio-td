import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="right-side">
                    <div className="name-link-wrapper">
                        <NavLink exact to="/">
                            TANIA ALEXANDRA D'ANGELO
                        </NavLink>
                    </div>
                </div>
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/about" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink >
                    </div>
                    <div className="nav-link-wrapper">
                        { false ? <NavLink to="/blog" activeClassName="nav-link-active">Add Blog</NavLink> : null }
                    </div>
                </div>
            </div>
        )
    }
}

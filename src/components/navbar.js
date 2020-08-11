import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Blog-Post</Link>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Posts</Link>
            </li>
            <li>
              <Link to="/create-post" className="nav-link">New Post</Link>
            </li>
            <li>
            <Link to="/users" className="nav-link">Discover People</Link>
            </li>
            <li>
              <Link to="/add-user" className="nav-link">Sign in</Link>
            </li>
          </ul>
      </nav>
    )
  }
}

export default Navbar;

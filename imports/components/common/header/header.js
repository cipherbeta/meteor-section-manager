import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {};

  render() {
    return (
      <nav uk-navbar="true" className="uk-navbar-container uk-margin">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <Link to="/" className="uk-navbar-item uk-logo">
              Section Manager
            </Link>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <li>
              <Link to="/sections">Sections</Link>
            </li>
            <li>
              <Link to="/seats">Seats</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

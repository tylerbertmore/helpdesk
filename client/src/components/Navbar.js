import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">HelpDesk</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/users" className="nav-link">Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/tickets" className="nav-link">Tickets</Link>
          </li>



        </ul>
        <form className="form-inline my-2 my-md-0">
        </form>
      </div>
    </nav>
    )
  }
}

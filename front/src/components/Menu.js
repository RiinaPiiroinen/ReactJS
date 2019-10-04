import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';




const Navbar = () => (
  <nav className="navbar">
    




    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Listaa kayttajaa
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/edit"
    >
      Muokkaa kayttajaa
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/add"
    >
      Lisaa kayttaja
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/delete"
    >
      Poista kayttaja
    </NavLink>
  </nav>
);

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return(
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/"
          exact>Create Songs
        </NavLink>
        </li>
        <li>
          <NavLink to="/songs"
          exact>All Songs
        </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

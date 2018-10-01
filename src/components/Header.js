import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Budget App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> |
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> |
<<<<<<< HEAD
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink> |
=======
>>>>>>> f2a8e1eb88b16b29d6b7f42e8edf500ccf33826d
    <NavLink to="/help" activeClassName="is-active">Help</NavLink> |
  </header>
);

<<<<<<< HEAD
export default Header
=======
export default Header
>>>>>>> f2a8e1eb88b16b29d6b7f42e8edf500ccf33826d

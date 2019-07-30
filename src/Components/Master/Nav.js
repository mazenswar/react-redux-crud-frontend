import React from "react";
import { Link } from "react-router-dom";
import "../../Stylesheets/nav.scss";

const Nav = () => {
  return (
    <nav>
      <Link to="/notes">Notes</Link>
      <Link to="/new-note">New Note</Link>
    </nav>
  );
};

export default Nav;

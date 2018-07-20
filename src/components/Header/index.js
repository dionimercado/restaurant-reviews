import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      {props.brand}
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <form className="form-inline my-2 my-lg-0 ml-auto">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
);

export default Header;

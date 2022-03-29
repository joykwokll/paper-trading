import React from "react";
import { Outlet, Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div>
      <div>
        <div className="Links">
          <Link to="/">Home</Link> |{" "}
          <Link to="/Portfolio">Portfolio</Link> |{" "}
          <Link to="/Buy">Buy</Link> |{" "}
          <Link to="/Sell">Sell</Link>
        </div>
        <div className="Login">
          <Link to="/Login">Login</Link> | <Link to="/Register">Register</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&family=Londrina+Solid:wght@300;400&display=swap');
      </style>
    </div>
  );
};

export default AppHeader;


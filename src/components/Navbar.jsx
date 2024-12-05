import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { Button } from 'primereact/button';


function Navbar({ state }) {

    return (
      <nav className="navbar">
        <div className="navbar-left">
          <h1>ServiceLink</h1> 
        </div>
        <div className="navbar-right">
        
          <a href="/home" className="nav-link">
            Home
          </a>


          <div className="card flex justify-content-center">
          {state!="register" && <Link to="/register-phone-number">
              <Button label="Register" text  severity="warning" />
            </Link>}
            {state!="login" && <Link to="/login">

            <Button label="Login" severity="warning" />
            </Link>}

        </div>

        </div>
      </nav>
    );
  }

  export default Navbar;
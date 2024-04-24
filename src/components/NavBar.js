import React from "react";
import { Link } from "react-router-dom";
import '../App.css';



const NavBar=()=> {
  
 
    return (
      <div className="animated"> 
        <nav className="navbar navbar-expand-lg fixed-top   navbar-dark bg-dark">
          <div className="container-fluid   text-center">
            <Link className="navbar-brand bg-color=black " to="/">
              <strong>ZEF NEWS</strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/General">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                
              </ul>
              <form class="d-flex" role="search">
        <input className="form-control mx-6" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        
      </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }


export default NavBar;

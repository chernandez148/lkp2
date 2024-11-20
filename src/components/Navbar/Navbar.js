import React from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import LKPLogo from "../../assets/LEFTKOAST-LOGO.png";
import "./Navbar.css";

function Navbar() {
  const openSearchForm = () => {
    document.querySelector(".search-overlay").classList.add("active");
  };

  const closeSearchForm = () => {
    document.querySelector(".search-overlay").classList.remove("active");
  };

  return (
    <nav className="Navbar flex items-center justify-between py-3 md:px-10 px-3">
      <div className="navbar-left flex items-center">
        <img src={LKPLogo} width={50} alt="Logo" />
        <ul className="hidden md:flex px-10">
          <li>
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/books">
              Books
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/illustrations">
              Illustrations
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/games">
              Games
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right flex items-center">
        <button onClick={openSearchForm}>
          <IoSearchSharp color="white" size={20} />
        </button>
        <button className="sign-in-btn mr-0">
          <Link to="/login">Sign In</Link>
        </button>
      </div>
      <div className="search-overlay">
        <form className="mx-10">
          <input type="text" placeholder="Search for..." />
          <button>
            <IoSearchSharp color="gray" size={20} />
          </button>
        </form>
        <button className="close-form" onClick={closeSearchForm}>
          <TfiClose color="white" size={40} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

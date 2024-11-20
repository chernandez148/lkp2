import React from "react";
import LKPLogo from "../../assets/LEFTKOAST-LOGO.png";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="Register">
      <div className="overlay"></div>
      <div className="register-wrapper">
        <img src={LKPLogo} width={150} />
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center my-5">
          Sign up to have exclusive access to +100 Books, Illustrations, Games
          and more.
        </h1>
        <div className="w-full flex">
          <input
            className="w-full py-3 px-5 mr-1 bg-transparent rounded text-white"
            type="text"
            placeholder="Email address"
          />
          <button className="text-lg bg-white px-8 rounded">
            <Link>Next</Link>
          </button>
        </div>
        <p className="my-5 text-white">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

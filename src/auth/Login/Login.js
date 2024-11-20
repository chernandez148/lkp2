import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="overlay"></div>
      <div className="login-wrapper p-5 md:p-10 bg-white/5">
        <h1 className="text-4xl text-white font-bold mb-3">Sign In</h1>
        <p className="text-xs text-white mb-5">
          Sign in to view your LKP account. If you don't have one, you will be
          prompted to create one.
        </p>
        <form>
          <input
            className="w-full py-3 px-5 bg-transparent rounded text-white"
            type="text"
            placeholder="Email address"
          />
          <input
            className="w-full py-3 px-5 mt-5 bg-transparent rounded text-white"
            type="password"
            placeholder="Password"
          />
          <button className="w-full py-3 px-5 mt-5 bg-white font-medium rounded">
            Sign In
          </button>
        </form>
        <Link className="text-sm text-center text-white mt-3">
          Forgot Password?
        </Link>
      </div>
      <p className="z-10 text-white mt-5">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;

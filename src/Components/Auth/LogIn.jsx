import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    console.log("login Btn Cliked", e.target
);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl text-center font-bold text-accent">
          Login your account
        </h1>
        <div className="divider"></div>
        <div className="card-body">
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div className="text-accent text-center my-2">
              Don't h Have an account ?{" "}
              <span>
                <Link to="/authlayout/register" className="text-red-500">
                  Resigser
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

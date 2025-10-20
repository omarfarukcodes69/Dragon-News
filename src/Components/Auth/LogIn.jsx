import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";

const LogIn = () => {
  const { logIn } = use(AuthContext);
  const location = useLocation();
  const nevigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((UserContainer) => {
        const user = UserContainer.user;
        nevigate(`${location.state ? location.state : "/"}`);
        // console.log(user);
        toast("Log In Successfully !!!");
      })
      .catch((error) => {
        // console.log(error.massage);
        toast(error.code, error.message);
      });
    // console.log("login Btn Cliked", email, password);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogIn}>
            <h1 className="text-2xl text-center font-bold text-accent">
              Login your account
            </h1>
            <div className="divider"></div>
            <fieldset className="fieldset">
              {/* Email  */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                required
              />
              {/* passeword */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                required
              />
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

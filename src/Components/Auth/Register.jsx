import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Resgiter Btn Clicked", name, photo, email, password);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-2xl text-center font-bold text-accent">
            Register your account
          </h1>
          <div className="divider"></div>
          <fieldset className="fieldset">
            {/* user Name  */}
            <label className="label">User Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
              name="name"
            />
            {/* photo  */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your photo url"
              name="photo"
            />
            {/* Email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            {/* passeword */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <div className="text-accent text-center">
            Have an account ?{" "}
            <span>
              <Link to="/authlayout" className="text-green-500">
                Log In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

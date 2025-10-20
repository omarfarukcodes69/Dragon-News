import React, { use } from "react";
import usericon from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logout()
      .then((result) => {
        // console.log(result);
        toast("Log Out Successfully");
      })
      .catch((error) => {
        // console.log(error.massage);
        toast(error.massage);
      });
    // console.log("Log Out Successfully");
  };
  return (
    <div className=" flex items-center justify-between ">
      <div className="text-xl font-semibold uppercase">
        {user && user.displayName}{" "}
      </div>
      <div className="text-accent space-x-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img className="w-10 h-10 rounded-full border-2"  src={user ? user.photoURL : usericon} alt="User Image" />
        {user ? (
          <Link onClick={handleLogOut} to={"/"} className="btn btn-primary">
            {" "}
            Log Out
          </Link>
        ) : (
          <Link to={"/authlayout/login"} className="btn btn-primary">
            {" "}
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

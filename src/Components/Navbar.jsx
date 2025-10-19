import React, { use } from "react";
import usericon from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className=" flex items-center justify-between ">
      <div className="text-xl font-semibold uppercase">{user.name} </div>
      <div className="text-accent space-x-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img src={usericon} alt="User Image" />
        <Link to={"/authlayout"} className="btn btn-primary"> Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import user from "../assets/user.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between ">
      <div className=""> </div>
      <div className="text-accent space-x-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img src={user} alt="User Image" />
        <button className="btn btn-primary"> Log In</button>
      </div>
    </div>
  );
};

export default Navbar;

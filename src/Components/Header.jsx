import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img src={logo} alt="Dragon News Logo" />
      <h2 className="text-accent">Journalism Without Fear or Favour</h2>
      <p className="text-accent">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;

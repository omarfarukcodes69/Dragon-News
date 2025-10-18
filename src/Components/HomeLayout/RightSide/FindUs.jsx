import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="my-5">
      <h1 className="text-lg font-semibold py-3 ">Find Us On</h1>
      <div className="">
        <button className="w-full btn btn-outline border border-gray-300 p-5">
          {" "}
          <FaFacebookF /> Facebook
        </button>
        <button className="w-full btn btn-outline border border-gray-300 p-5">
          {" "}
          <FaInstagram /> Instagram
        </button>
        <button className="w-full btn btn-outline border border-gray-300 p-5">
          {" "}
          <FaTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;

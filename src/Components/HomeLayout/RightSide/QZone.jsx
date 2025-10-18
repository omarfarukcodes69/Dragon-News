import React from "react";
import swimming from "../../../assets/swimming.png";
import classroom from "../../../assets/class.png";
import playground from "../../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 w-full p-4 rounded my-10">
      <h1 className="text-lg font-semibold ">Q-Zone</h1>
      <div className=" space-y-10 mx-auto mt-7 ">
        <img src={swimming} alt="" />
        <img src={playground} alt="" />
        <img src={classroom} alt="" />
      </div>
    </div>
  );
};

export default QZone;

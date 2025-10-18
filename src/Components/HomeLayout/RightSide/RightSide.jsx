import React from "react";
import SocialLogin from "./SocialLogin";
import QZone from "./QZone";
import Ads from "./Ads";
import FindUs from "./FindUs";

const RightSide = () => {
  return (
    <div>
      <SocialLogin />
      <FindUs />
      <QZone />
      <Ads />
    </div>
  );
};

export default RightSide;

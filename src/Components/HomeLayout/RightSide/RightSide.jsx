import React, { use } from "react";
import SocialLogin from "./SocialLogin";
import QZone from "./QZone";
import Ads from "./Ads";
import FindUs from "./FindUs";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

const RightSide = () => {
  const { user } = use(AuthContext);
  // console.log(user);
  return (
    <>
      <div>
        {user && user ? "" : <SocialLogin />}
        <FindUs />
        <QZone />
        <Ads />
      </div>
    </>
  );
};

export default RightSide;

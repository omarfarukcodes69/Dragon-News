import React from "react";

const PersentageLoading = () => {
  return (
    <div className="w-10/12 mx-auto text-center">
      <div
        className="radial-progress"
        style={
          {
            "--value": "70",
            "--size": "12rem",
            "--thickness": "2rem",
          } /* as React.CSSProperties */
        }
        aria-valuenow={70}
        role="progressbar"
      >
        70%
      </div>
    </div>
  );
};

export default PersentageLoading;

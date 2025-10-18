import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 p-3 items-center bg-base-200">
      <p className=" text-base-100 bg-secondary p-3 rounded ">Latest</p>
      <Marquee
        className="bg-base-200 text-semi-bold"
        pauseOnHover={true}
        speed={60}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          voluptates laboriosam in magni veritatis perferendis maxime delectus
          iure minus sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          voluptates laboriosam in magni veritatis perferendis maxime delectus
          iure minus sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          voluptates laboriosam in magni veritatis perferendis maxime delectus
          iure minus sint.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;

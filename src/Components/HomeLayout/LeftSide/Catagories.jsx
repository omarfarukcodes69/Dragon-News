import React, { use } from "react";
import { NavLink } from "react-router";
const CatagoriesPromise = fetch("/categories.json").then((res) => res.json());
const Catagories = () => {
  const catagories = use(CatagoriesPromise);
  // console.log(catagories);
  return (
    <div>
      <h1 className="font-semibold text-lg">
        All Catagories ({catagories.length})
      </h1>
      <div className="grid grid-cols-1 gap-3 mt-5  ">
        {catagories.map((catagory) => (
          <NavLink
            key={catagory.id}
            className={
              "btn text-accent border-0 bg-base-100 hover:bg-base-200 "
            }
            to={`/catagory/${catagory.id}`}
          >
            {catagory.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagories;

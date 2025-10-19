import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  //   console.log(news?.title);
  const { author, title, thumbnail_url, details } = news;
//   console.log(news?.author);
  const publisharDate = new Date(author?.published_date).toLocaleDateString();
  return (
    <div className="shadow my-10 rounded-2xl">
      <header className="flex justify-between items-center p-3 bg-base-300 rounded-t-xl ">
        <aside className="flex gap-2">
          <img
            className="w-20 h-20 rounded-full boeder-2 p-2"
            src={author?.img}
            alt={author?.name}
          />
          <div className="pt-2">
            <h1 className="">{author?.name}</h1>
            <p className="text-accent">{publisharDate}</p>
          </div>
        </aside>
        <aside className="text-accent flex gap-2 text-xl">
          <CiBookmark />
          <CiShare2 />
        </aside>
      </header>
      <main className="w-11/12 mx-auto my-5 space-y-4">
        <h1 className="text-xl font-bold py-3">{title}</h1>
        <img src={thumbnail_url} alt="" className=" rounded-2xl" />
        <p className="text-accent ">{details}</p>
        <Link to={"/"} className="btn btn-secondary py-4 px-2 my-10  ">
          {" "}
          <FaArrowLeft />
          All news in this category
        </Link>
      </main>
    </div>
  );
};

export default NewsDetailsCard;

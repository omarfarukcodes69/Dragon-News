import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, author, title, thumbnail_url, details, rating, total_view } =
    news;

  const publisharDate = new Date(author.published_date).toLocaleDateString();
  //   console.log(news);
  return (
    <div className="shadow my-10 rounded-2xl">
      <header className="flex justify-between items-center p-3 bg-base-300 rounded-t-xl ">
        <aside className="flex gap-2">
          <img
            className="w-20 h-20 rounded-full boeder-2 p-2"
            src={author.img}
            alt={author.name}
          />
          <div className="pt-2">
            <h1 className="">{author.name}</h1>
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
        <p className="text-accent ">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}....{" "}
              <Link
                to={`/news-details/${id}`}
                className=" text-amber-500 cursor-pointer "
              >
                Read More
              </Link>
            </>
          ) : (
            <>{details}</>
          )}
        </p>
      </main>
      <div className="divider w-11/12 mx-auto"></div>

      <footer className="w-11/12 mx-auto flex justify-between items-center py-4 px-2">
        <div className="flex items-center gap-2 text-lg ">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar className="text-amber-500" key={i} />
          ))}
          {rating.number}
        </div>
        <div className="text-accent flex items-center gap-2 text-lg">
          <FaEye /> {total_view}
        </div>
      </footer>
    </div>
  );
};

export default NewsCard;

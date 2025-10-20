import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router";

const LatestNews = () => {
  const data = useLoaderData();
  const [brekingNews, setBreakingNews] = useState([]);
  // console.log(brekingNews);

  useEffect(() => {
    const todayNews = data.filter(
      (item) => item.others?.is_today_pick === true
    );
    setBreakingNews(todayNews);
  }, [data]);
  return (
    <div className="flex gap-3 p-2 items-center bg-base-200">
      <p className=" w-fit text-base-100 bg-secondary py-1 px-3 rounded text-nowrap ">
        Breaking News
      </p>
      <Marquee
        className="bg-base-200 text-semi-bold"
        pauseOnHover={true}
        speed={60}
      >
        {brekingNews.map((news) => (
          <span key={news.id} className="mr-10">
            {news.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;

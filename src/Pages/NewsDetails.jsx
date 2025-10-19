import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightSide from "../Components/HomeLayout/RightSide/RightSide";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import PersentageLoading from "../Components/Loaders/PersentageLoading";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState();

  useEffect(() => {
    const filterData = data.find((ress) => ress.id == id);
    setNews(filterData);
    // console.log(filterData);
  }, [data, id]);
  //   console.log(news?.title
  // );
  return (
    <div className=" w-10/12 min-h-screen mx-auto my-15">
      <header>
        <Header />
      </header>
      <main className=" grid grid-cols-12 gap-5 my-15">
        <aside className=" col-span-9 card w-full ">
          <h1 className="text-lg font-semibold py-5">Dragon News</h1>
          {news ? (
            <NewsDetailsCard news={news}></NewsDetailsCard>
          ) : (
            <PersentageLoading />
          )}
        </aside>
        <aside className=" col-span-3">
          <RightSide />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;

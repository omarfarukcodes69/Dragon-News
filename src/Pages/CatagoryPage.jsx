import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CatagoryPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [catagoryNews, setCatagoryNews] = useState([]);
//   console.log(id, data);
//   console.log(catagoryNews);
  useEffect(() => {
    if (Number(id) === 0) {
      return setCatagoryNews(data);
    } else if (Number(id) === 1) {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      return setCatagoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCatagoryNews(filterNews);
    }
  }, [data, id]);
  return (
    <div>
      <h1>Found {catagoryNews.length} News </h1>
      <div className="grid grid-cols-1">
        {catagoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagoryPage;

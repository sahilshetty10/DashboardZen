import React, { useEffect, useState } from "react";
import Article from "./Article";

const NewsArticles = () => {
  const [country, setCountry] = useState("ca");
  const [category, setCategory] = useState("general");
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const storedCountry = localStorage.getItem("newsCountry");
      const storedCategory = localStorage.getItem("newsCategory");

      if (storedCountry) {
        setCountry(storedCountry);
      } else {
        localStorage.setItem("newsCountry", country);
      }

      if (storedCategory) {
        setCategory(storedCategory);
      } else {
        localStorage.setItem("newsCategory", category);
      }

      await fetchNews(storedCountry || country, storedCategory || category);
    };

    fetchData();
  }, []);

  const fetchNews = async (country, category) => {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d5b9080f63c44d35aec2792dc160e348`
    );
    let data = await response.json();
    setNewsData(data);
  };

  if (!newsData) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="row-span-7 bg-container flex flex-col gap-8 h-full">
        <h2 className="container-title">News</h2>
        <div className="h-full overflow-auto flex flex-col gap-8">
          {newsData.articles.map((article, index) => {
            return <Article key={index} data={article} />;
          })}
        </div>
      </section>
    );
  }
};

export default NewsArticles;

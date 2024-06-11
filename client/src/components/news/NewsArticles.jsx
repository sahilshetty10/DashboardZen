import React, { useEffect, useState } from "react";
import Article from "./Article";

const NewsArticles = () => {
  const [country, setCountry] = useState("ca");
  const [category, setCategory] = useState("general");
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    if (localStorage.country) {
      setCountry(localStorage.country);
    } else {
      localStorage.country = country;
    }
    if (localStorage.category) {
      setCategory(localStorage.category);
    } else {
      localStorage.category = category;
    }

    fetchNews();
  }, []);

  const fetchNews = async () => {
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
            return(<Article key={index} data={article} />);
          })}
        </div>
      </section>
    );
  }
};

export default NewsArticles;

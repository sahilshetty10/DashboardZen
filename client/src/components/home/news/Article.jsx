import React from "react";

const Article = ({ data }) => {
  return (
    <a href={data.url} target="_blank" className="duration-300 p-4 rounded-[15px] mr-4 hover:pb-8 hover:shadow-xl hover:border">
      <article>
        <h3 className="text-lg font-medium truncate mb-2">{data.title}</h3>
        <p>{data.author}</p>
      </article>
    </a>
  );
};

export default Article;

import React from "react";

const Article = ({ data }) => {
  return (
    <article className="duration-300 rounded-[15px] hover:bg-slate-400 p-4">
      <a href={data.url} target="_blank">
        <h3 className="text-lg font-medium truncate">{data.title}</h3>
        </a>
      <p>{data.author}</p>
    </article>
  );
};

export default Article;

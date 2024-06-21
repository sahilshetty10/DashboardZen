import React from "react";

const Article = ({ data }) => {
  return (
    <a
      href={data.url}
      target="_blank"
      className="mr-4 rounded-[15px] p-4 duration-300 hover:border hover:pb-8 hover:shadow-xl"
    >
      <article>
        <h3 className="mb-2 truncate text-lg font-medium">{data.title}</h3>
        <p>{data.author}</p>
      </article>
    </a>
  );
};

export default Article;

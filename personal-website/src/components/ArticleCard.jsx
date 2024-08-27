import React from "react";
import "./ArticleCard.modules.css";

const ArticleCard = ({ iconSrc, title, level }) => {
  return (
    <article className="article">
      <img src={iconSrc} alt={`${title} icon`} className="icon" />
      <div>
        <h3>{title}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
};

export default ArticleCard;

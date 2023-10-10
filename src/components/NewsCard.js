
import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img className="news-image" src={article.urlToImage} alt={article.title} />
      <div className="news-details">
        <h2 className="news-title">{article.title}</h2>
        <p className="news-description">{article.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;

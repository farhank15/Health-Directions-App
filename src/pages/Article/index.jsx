import React, { useState, useEffect } from "react";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiKey = "20e385783e25425a99864c82e6d0c68a";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data.articles);
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) { 
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl ml-8 mb-4">Artikel Terkini</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="card card-compact w-full md:w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={
                  article.urlToImage ||
                  "https://wallpapers.com/images/hd/health-pictures-q2k30d5zvzldnylq.jpg"
                }
                alt={article.title || "Default Image"}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://wallpapers.com/images/hd/health-pictures-q2k30d5zvzldnylq.jpg";
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <p>{article.description}</p>
              <div className="card-actions justify-end">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;

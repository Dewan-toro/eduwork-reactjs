import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const NewsPortalFC = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=e03f62162c8d4a93bf5a5cad15d78715`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchNews();
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center text-primary">
        Portal Berita Function Component
      </h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Cari berita..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="btn btn-primary">
            Cari
          </button>
        </div>
      </form>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={article.urlToImage}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPortalFC;

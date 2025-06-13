import React, { useState, useEffect } from 'react';
import Newsletter from './Newsletter';

const Newsboard = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
 let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {console.log("API Response:", data);
        setArticles(data.articles);})
  }, [props.category]);

  return (
    <div className="container my-4">
      <h2 className="text-center" style={{border:"2px solid black",backgroundColor:"beige"}}>
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <div key={index} className="col-md-4 d-flex align-items-stretch">
            <Newsletter
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsboard;

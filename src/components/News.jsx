import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";
import * as categories from "../data/index"; // Import all data from the 'data' directory

const News = ({ category, setProgress }) => {
    const [articles, setArticles] = useState([]);

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=80&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProgress(50);
                const allData = categories[category.toLowerCase()] || categories.general;
                const response = await fetch(url);
                const data = await response.json();
                let allnews = data.articles;
                // setArticles(allnews);
                setArticles(allData);
                setProgress(100);
            } catch (error) {
                console.log("You have an error: ", error);
            }
        };

        fetchData();

        document.title = `${category.charAt(0).toUpperCase() + category.slice(1)
            } - NewsNine`;
    }, [category, setProgress]);

    return (
        <>
            <h1 className="text-2xl font-bold underline text-center my-5">
                Breaking News
            </h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 py-5 md:px-10 mx-auto">
                {articles
                    .filter((article) => article.urlToImage)
                    .map((element, index) => (
                        <NewsItem
                            key={index}
                            title={element.title}
                            sourceName={element.source.name}
                            description={
                                element.description
                                    ? element.description.slice(0, 150)
                                    : "We apologize for any inconvenience caused by the absence of a detailed description, and we appreciate your patience as we work to provide more information about this resource."
                            }
                            author={element.author ? element.author : "Unknown"}
                            date={element.publishedAt}
                            imgurl={
                                element.urlToImage ||
                                "https://images.deccanherald.com/deccanherald%2F2023-11%2F683aa75c-168e-4089-ad79-dd931f394ea6%2FPict_2037.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop"
                            }
                            newsurl={element.url}
                        />
                    ))}
            </div>
        </>
    );
};

export default News;
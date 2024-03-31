import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";
import * as categories from "../data/index"; // Import all data from the 'data' directory

const News = ({ category, setProgress }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProgress(50);
                const data = categories[category.toLowerCase()] || categories.general;
                setArticles(data);
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

// import React, { useState, useEffect } from 'react';
// import { NewsItem } from './NewsItem';
// import entertainment  from '../data/entertainment.json'
// import business  from '../data/business.json'
// import general  from '../data/general.json'

// const News = ({ category, setProgress }) => {
//     const [articles, setArticles] = useState(general);

//     const Capitalize = (str) => {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     };

//     useEffect(() => {
//         // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=80&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

//         category = category.toLowerCase()
//         async function fetchData() {
//             try {
//                 console.log(category);
//                 setProgress(30);
//                 // const response = await fetch(url);
//                 // setProgress(0);
//                 // const data = await response.json();
//                 // let allnews = data.articles;
//                 setArticles(category);
//                 // setArticles(allnews);
//                 setProgress(100);
//             } catch (error) {
//                 console.log("You have an error: ", error);
//             }
//         }

//         fetchData();

//         document.title = `${Capitalize(category)} - NewsNine`;

//     }, [category]);

//     return (
//         <>
//             {articles.length === 0 && <h2 className='font-bold text-center '>Loading...</h2>}
//             <div className='grid sm:grid-cols-2 lg:grid-cols-3 py-5 md:px-20 mx-auto'>
//                 {articles.map((element, index) => (
//                     <NewsItem
//                         key={index}
//                         title={element.title}
//                         sourseName={element.source.name}
//                         description={element.description ? element.description.slice(0, 150) : "We apologize for any inconvenience caused by the absence of a detailed description, and we appreciate your patience as we work to provide more information about this resource."}
//                         author={element.author ? element.author : "Unknown"}
//                         date={element.publishedAt}
//                         imgurl={!element.urlToImage ? "https://images.deccanherald.com/deccanherald%2F2023-11%2F683aa75c-168e-4089-ad79-dd931f394ea6%2FPict_2037.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop" : element.urlToImage}
//                         newsurl={element.url} />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default News;

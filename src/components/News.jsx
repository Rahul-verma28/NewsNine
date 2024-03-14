// import React, { useState, useEffect } from 'react';
// import { NewsItem } from './NewsItem';
// import {axios} from 'axios';

// const News = ({ category, setProgress, api }) => {
//     const [articles, setArticles] = useState([]);

//     const Capitalize = (str) => {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     };
//     console.log(api);

//     useEffect(() => {
//         const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api}`;
//         // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=bf3aa761613547dc8fdc2056e11b3fc6`;

//         async function fetchData() {
//             try {
//                 setProgress(10);
//                 const response = await axios.get(url, {
//                     headers: {
//                         // Add headers here to handle the upgrade
//                     }
//                 });
//                 let allnews = response.data.articles;
//                 setArticles(allnews);
//                 setProgress(100);
//             } catch (error) {
//                 console.log("You have an error: ", error);
//             }
//         }

//         fetchData();

//         document.title = `${Capitalize(category)} - NewsNine`;

//     }, [category, setProgress, api]);

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
//                         author={element.author ? element.author : "Rahul verma"}
//                         date={element.publishedAt}
//                         imgurl={!element.urlToImage ? "https://images.deccanherald.com/deccanherald%2F2023-11%2F683aa75c-168e-4089-ad79-dd931f394ea6%2FPict_2037.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop" : element.urlToImage}
//                         newsurl={element.url} />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default News;

import React, { useState, useEffect } from 'react';
import { NewsItem } from './NewsItem';

const News = ({ category, setProgress }) => {
    const [articles, setArticles] = useState([]);

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=80&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

        async function fetchData() {
            try {
                setProgress(30);
                console.log(process.env.REACT_NEWS_API_KEY)
                const response = await fetch(url);
                setProgress(0);
                const data = await response.json();
                let allnews = data.articles;
                setArticles(allnews);
                setProgress(100);
            } catch (error) {
                console.log("You have an error: ", error);
            }
        }

        fetchData();

        document.title = `${Capitalize(category)} - NewsNine`;

    }, [category, setProgress]);

    return (
        <>
            {articles.length === 0 && <h2 className='font-bold text-center '>Loading...</h2>}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 py-5 md:px-20 mx-auto'>
                {articles.map((element, index) => (
                    <NewsItem
                        key={index}
                        title={element.title}
                        sourseName={element.source.name}
                        description={element.description ? element.description.slice(0, 150) : "We apologize for any inconvenience caused by the absence of a detailed description, and we appreciate your patience as we work to provide more information about this resource."}
                        author={element.author ? element.author : "Rahul verma"}
                        date={element.publishedAt}
                        imgurl={!element.urlToImage ? "https://images.deccanherald.com/deccanherald%2F2023-11%2F683aa75c-168e-4089-ad79-dd931f394ea6%2FPict_2037.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop" : element.urlToImage}
                        newsurl={element.url} />
                ))}
            </div>
        </>
    );
};

export default News;


import React, { useState, useEffect } from 'react'
import { NewsItem } from './NewsItem'
import axios from 'axios'

const News = (props) => {

    const [articles, setArticles] = useState([])

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=80&apiKey=bf3aa761613547dc8fdc2056e11b3fc6`

    async function fetchData() {
        try {
            const response = await axios.get(url)
            let allnews = response.data.articles;
            setArticles(allnews)

        } catch (error) {
            console.log("you have an error: ", error);
        }
    }
    
    useEffect(() => {
        props.setProgress(0)
        props.setProgress(50)
        fetchData();
        setTimeout(() => {
            props.setProgress(100)
        }, 1000);
        document.title = `${Capitalize(props.category)} - NewsNine`;
    }, [])

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 py-5 md:px-20 mx-auto'>
            {articles.map((element, index) => (
                < NewsItem
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
    )
}

export default News

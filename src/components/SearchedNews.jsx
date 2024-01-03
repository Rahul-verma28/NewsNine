import React, { useState, useEffect } from 'react'
import { NewsItem } from './NewsItem'
import axios from 'axios'


const SearchedNews = ({ setProgress, value }) => {
    const [searchedArticles, setsearchedArticles] = useState([])

    useEffect(() => {

        const url = `https://newsapi.org/v2/everything?q=${value}&apiKey=bf3aa761613547dc8fdc2056e11b3fc6`
        // const url = `https://newsapi.org/v2/everything?q=modi&apiKey=bf3aa761613547dc8fdc2056e11b3fc6`

        async function fetchData() {
            try {
                setProgress(0)
                const response = await axios.get(url)
                let allnews = response.data.articles;
                setsearchedArticles(allnews)
                setProgress(100)
                console.log(value)
            } catch (error) {
                console.log("you have an error: ", error);
            }
        }


        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <>
            {searchedArticles.length === 0 && <h2 className='font-bold text-center '>Loading...</h2>}

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 py-5 md:px-20 mx-auto'>
                {searchedArticles && searchedArticles.map((element, index) => (
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
    )

}

export default SearchedNews

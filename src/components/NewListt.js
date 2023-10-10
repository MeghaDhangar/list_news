import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import NewsCard from './NewsCard';

function NewsList() {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchdata, setSearchData] = useState('');
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/everything?q=apple&from=2023-10-06&to=2023-10-06&sortBy=popularity&apiKey=dc47ddd5818f498d9a685c776e29b47a`
                );
                const data = response.data.articles;
                setNewsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchdata]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredNewsData = newsData.filter((article) =>
        article.title.toLowerCase().includes(searchdata.toLowerCase())
    );
    const currentNewsData = filteredNewsData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredNewsData.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const searchNews = async () => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=${searchdata}&from=2023-10-06&to=2023-10-06&sortBy=popularity&apiKey=dc47ddd5818f498d9a685c776e29b47a`
            );
            const data = response.data.articles;
            setNewsData(data);
            setCurrentPage(1);
            localStorage.setItem('newsData', JSON.stringify(data));
        } catch (error) {
            console.error('Error searching for news:', error);
        }
    };

    return (
        <div className="container">
              <h1 className="mb-4"> Show News List</h1>
            <SearchBar searchdata={searchdata} setSearchData={setSearchData} searchNews={searchNews} />
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className="news-cards">
                {currentNewsData.map((article, index) => (
                    <NewsCard article={article} key={index} />
                ))}
            </div>
        </div>
    );
}

export default NewsList;

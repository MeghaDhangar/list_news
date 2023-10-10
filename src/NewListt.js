
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function NewListt() {
//   const [newsData, setNewsData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchdata, setSearchData] = useState('');
//   const itemsPerPage = 10;

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=apple&from=2023-10-06&to=2023-10-06&sortBy=popularity&apiKey=dc47ddd5818f498d9a685c776e29b47a`
//       );
//       const data = response.data.articles;
//       setNewsData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, [searchdata]);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const filteredNewsData = newsData.filter((article) =>
//     article.title.toLowerCase().includes(searchdata.toLowerCase())
//   );
//   const currentNewsData = filteredNewsData.slice(startIndex, endIndex);
//   const totalPages = Math.ceil(filteredNewsData.length / itemsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const searchNews = async () => {
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=${searchdata}&from=2023-10-06&to=2023-10-06&sortBy=popularity&apiKey=dc47ddd5818f498d9a685c776e29b47a`
//       );
//       const data = response.data.articles;
//       setNewsData(data);
//       setCurrentPage(1);
//       localStorage.setItem('newsData', JSON.stringify(data));
//     } catch (error) {
//       console.error('Error searching for news:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="mb-4"> Show News List</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search Any Headlines"
//           value={searchdata}
//           onChange={(e) => setSearchData(e.target.value)}
//         />
//         <button onClick={searchNews}>Search</button>
//       </div>

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             className={`page-button ${index + 1 === currentPage ? 'active' : ''}`}
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       <div className="news-cards">
//         {currentNewsData.map((article, index) => (
//           <div className="news-card" key={index}>
//             <img className="news-image" src={article.urlToImage} alt={article.title} />
//             <div className="news-details">
//               <h2 className="news-title">{article.title}</h2>
//               <p className="news-description">{article.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default NewListt;


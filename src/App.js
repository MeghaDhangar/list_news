
import './App.css';
import './index.css'
import NewListt from './NewListt';
function App() {
  return (
    <div className="App">
       {/* <Search/> */}
       {/* <Megha/> */}
       <NewListt/>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import NewsList from './component/NewsList';
// import SearchBar from './component/SearchBar';
// import Pagination from './component/Pagination';
// import './App.css';


// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = 10; // Replace with the actual total number of pages
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//   return (
//     <div className="container">
//       <h1 className="mb-4">News List</h1>
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <NewsList searchQuery={searchQuery} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
//     </div>
//   );
// }

// export default App;




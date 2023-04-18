import React, { useState, useMemo } from "react";
import ResultsBox from "./resultsBox";
import searchData from "../searchData";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setCurrentPage(1);
  };

  const filteredResults = useMemo(() => {
    if (inputValue === "") {
      return [];
    }

    const allResults = searchData.projects
      .concat(searchData.websites, searchData.githubLinks, searchData.youtubeVideos)
      .filter((item) => {
        for (const key in item) {
          if (
            Object.prototype.hasOwnProperty.call(item, key) &&
            typeof item[key] === "string" &&
            item[key].toLowerCase().includes(inputValue.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });

    return allResults;
  }, [inputValue]);

  const maxPage = Math.ceil(filteredResults.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={`search-box-container ${!inputValue ? "center" : ""}`}>
      {!inputValue && <h1 className="search-box-title">What Can I Do For You?</h1>}
      <input className="search-box"
        type="search"
        placeholder="Search"
        onChange={handleInputChange}
        value={inputValue}
      />
      {currentItems.length > 0 && <ResultsBox searchResults={currentItems} />}
      {filteredResults.length > itemsPerPage && (
        <div className="pagination-container">
          {Array.from({ length: maxPage }).map((_, i) => (
            <button
              key={i}
              className={`pagination-button ${
                currentPage === i + 1 ? "active" : ""
              }`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
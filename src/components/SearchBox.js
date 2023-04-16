import React, { useState } from "react";
import ResultsBox from "./resultsBox";
import searchData from "../searchData";

const SearchBox = ({}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === "") {
      // No search input
      setSearchResults([]);
    } else {
      // Search all fields of each item for the input value
      setSearchResults(
        searchData.projects
          .concat(searchData.websites, searchData.githubLinks, searchData.youtubeVideos)
          .filter((item) => {
            for (const key in item) {
              if (Object.prototype.hasOwnProperty.call(item, key) && typeof item[key] === "string" && item[key].toLowerCase().includes(value.toLowerCase())) {
                return true;
              }
            }
            return false;
          })
      );
    }
  };

  return (
    <div className="search-box-container">
      <input type="search" placeholder="Search" onChange={handleInputChange} value={inputValue} />
      <ResultsBox searchResults={searchResults} inputValue={inputValue} />
    </div>
  );
};

export default SearchBox;
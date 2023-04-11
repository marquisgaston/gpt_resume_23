import React from "react";

const ResultsBox = ({ searchResults, inputValue }) => {
  if (!inputValue) {
    return null; // No search input
  }

  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((item, index) => {
          // Render each matching item
          if (item.name) {
            // Project or website
            return <div key={index}>{item.name}</div>;
          } else if (item.title) {
            // YouTube video
            return <div key={index}>{item.title}</div>;
          } else if (item.link) {
            // GitHub link
            return <div key={index}>{item.link}</div>;
          } else {
            return null; // unknown item type
          }
        })
      ) : (
        <div>Nothing matches your search</div>
      )}
    </div>
  );
};

export default ResultsBox;
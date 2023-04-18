import React from "react";

const ResultsBox = ({ searchResults }) => {
  if (searchResults.length === 0) {
    return <div className="results-box-container">No results found</div>;
  }

  const renderItem = (item) => {
    return (
      <div key={item.id} className="result-item">
        {Object.entries(item).map(([key, value]) => {
          if (key === 'link') {
            return (
              <a key={key} href={value} className="item-link">
                {value}
              </a>
            );
          }
          return (
            <div key={key} className={`item-${key}`}>
              {value}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="results-box-container">
     {searchResults.map((item) => renderItem(item))}
    </div>
  );
};

export default ResultsBox;

import React from "react";
import generateSearchResults from "../searchResults";

const ResultsBox = ({ searchResults, inputValue }) => {
  const extraResults = generateSearchResults(3);

  const filteredResults = searchResults.filter((result) => {
    const { name, description, hostingLink, githubLink } = result;
    const lowerCaseInputValue = inputValue.toLowerCase();
    return (
      name?.toLowerCase()?.includes(lowerCaseInputValue) ||
      description?.toLowerCase()?.includes(lowerCaseInputValue) ||
      hostingLink?.toLowerCase()?.includes(lowerCaseInputValue) ||
      githubLink?.toLowerCase()?.includes(lowerCaseInputValue)
    );
  });

  const allResults = inputValue
    ? [...searchResults, ...extraResults, ...filteredResults]
    : [];

  const uniqueResults = allResults.filter(
    (result, index, self) =>
      index ===
      self.findIndex((r) => r.name?.toLowerCase() === result.name?.toLowerCase())
  );

  return (
    <div className="results-box-container">
      {inputValue && (
        <div className="results-box-header">
          <p>Showing results for "{inputValue}"</p>
        </div>
      )}
      {uniqueResults.length > 0 ? (
        <ul className="results-list">
          {uniqueResults.map((result, index) => (
            <li className="result-item" key={index}>
              <a href={result.hostingLink || result.githubLink}>
                {result.previewImage && (
                  <img src={`./images/${result.previewImage}`} alt={result.name} />
                )}
                <div className="result-content">
                  {result.name && <h3>{result.name}</h3>}
                  <p>{result.description}</p>
                  <p>{result.hostingLink || result.githubLink}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        inputValue && <div className="no-results-message">Nothing matches your search.</div>
      )}
    </div>
  );
};

export default ResultsBox;

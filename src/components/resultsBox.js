import React from 'react';
import generateSearchResults from '../searchResults';

const ResultsBox = ({ searchResults, inputValue }) => {
  const extraResults = generateSearchResults(20);

  const filterResults = (results, term) => {
    return results.filter((result) => {
      const values = Object.values(result);
      return values.some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(term.toLowerCase());
        }
        return false;
      });
    });
  };

  const filteredResults = inputValue !== '' ? filterResults(searchResults.concat(extraResults), inputValue) : [];

  return (
    <div className="results-box">
      <div>
        {filteredResults.length > 0 ? (
          filteredResults.map((result, index) => (
            <div key={index} className="result-item">
              <strong>{result.title || result.name}</strong>
              <br />
              {result.description || ''}
              <br />
              {result.link || ''}
              <br />
              {result.img || ''}
              <br />
              {result.url || ''}
            </div>
          ))
        ) : (
          inputValue !== '' && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsBox;
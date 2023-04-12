// searchResults.js

import chance from "chance";

const generateSearchResults = (count) => {
  const results = [];
  const chanceInstance = chance();

  for (let i = 0; i < count; i++) {
    results.push({
      title: chanceInstance.sentence(),
      description: chanceInstance.paragraph(),
      url: chanceInstance.url(),
      thumbnailUrl: `https://picsum.photos/seed/${i + 1}/200/150`, // Using https://picsum.photos/ to generate random images
    });
  }

  return results;
};

export default generateSearchResults;

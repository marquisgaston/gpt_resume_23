function getRandomImage() {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/id/${randomId}/1920/1080`;
  }
  
  export default getRandomImage;
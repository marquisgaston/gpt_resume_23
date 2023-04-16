function getRandomImage() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const dateString = `${year}-${month}-${day}`;
  const numericDate = parseInt(dateString.replace(/-/g, ''), 10);
  const randomId = numericDate % 1000 + 1;
  return `https://picsum.photos/id/${randomId}/1920/1080`;
}

export default getRandomImage;

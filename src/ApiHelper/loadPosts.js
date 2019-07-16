const BASE_URL = "https://simple-blog-api.crew.red/posts";

export const loadPosts = async () => {
  console.log('sending request ...');
  return await fetch(BASE_URL)
    .then(response => response.json())
    .then(console.log('Getted request ...'))
    .catch(error => console.error('Oh no! Something went wrong: ' + error))
};

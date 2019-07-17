const BASE_URL = "https://jsonplaceholder.typicode.com/comments";

export const loadPosts = async () => {
  return await fetch(BASE_URL)
    .then(response => response.json())
    .catch(error => console.error('Oh no! Something went wrong: ' + error))
};

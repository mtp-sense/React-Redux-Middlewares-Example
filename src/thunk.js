export const fetchPosts = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_POSTS", payload: data }));
  };
};

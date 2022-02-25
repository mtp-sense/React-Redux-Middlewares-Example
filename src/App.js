import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./thunk";

function App() {
  const counter = useSelector((state) => state.counter);
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleGetPosts = () => {
    fetchPosts()(dispatch);
  };
  return (
    <div className="App">
      <h1>React-Redux exmaples</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch({ type: "INC", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DEC", payload: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={handleGetPosts}>Get Posts(Thunk)</button>
      <button onClick={() => dispatch({ type: "FETCH_USERS" })}>
        Get Users(Saga)
      </button>
      <hr />
      <div>
        <h3>Posts Data - </h3>
        {posts.map((post) => (
          <div
            key={post.id}
          >{`Post id - ${post.id} Title - ${post.title}`}</div>
        ))}
      </div>
      <hr />
      <div>
        <h3>Users Data - </h3>
        {users.map((user) => (
          <div key={user.id}>{`Post id - ${user.id} Title - ${user.name}`}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

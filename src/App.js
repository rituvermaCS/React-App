import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./component/post";
import Comment from "./component/comments";
function App() {
  const name = prompt("Please enter your name");
  sessionStorage.setItem("name", name);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Post />}></Route>
          <Route exact path="/comment" element={<Comment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
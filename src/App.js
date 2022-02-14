import Movie from "./components/Movie";
import Home  from "./routes/Home";
import Detail  from "./routes/Detail";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movie/:id" element={<Detail />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

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
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
      <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

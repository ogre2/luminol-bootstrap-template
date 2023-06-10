import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

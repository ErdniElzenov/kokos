import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Bonus from "./page/Bonus";
import Rules from "./page/Rules";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="fon"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bonus" element={<Bonus />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

function NotFound() {
  return <h1>Страница не найдена</h1>;
}

export default App;

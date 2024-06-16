import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/molecules/loginregister/Login";
import Register from "./components/molecules/loginregister/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import History from "./pages/History";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article" element={<Article />} />
          <Route path="/history" element={<History />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

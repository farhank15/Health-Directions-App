import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/molecules/loginregister/Login";
import Register from "./components/molecules/loginregister/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import History from "./pages/History";
import FAQ from "./pages/FAQ";
import Consultation from "./pages/KonsultasiMedis";
import Medicine from "./pages/Medicine"
import Appshell from "@components/molecules/Appshell";

function App() {
  return (
    <>
      <Router>
        <Appshell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/article" element={<Article />} />
            <Route path="/history" element={<History />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/konsultasi-medis" element={<Consultation />} />
            <Route path="/medicine" element={<Medicine />} />
          </Routes>
        </Appshell>
      </Router>
    </>
  );
}

export default App;

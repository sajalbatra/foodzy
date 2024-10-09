// src/App.tsx

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./Home";
import About from "./components/About";
import Menu from "./components/MenuPage/Menu";
import Blogs from "./components/Blogs";
import Forms from "./components/Forms";
import BookTable from "./BookTable"; // Import the BookTable component

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pages" element={<Blogs />} />
        <Route path="/user" element={<Forms />} />
        <Route path="/book-a-table" element={<BookTable />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

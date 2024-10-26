import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Menu from "./components/MenuPage/Menu";
import Blogs from "./components/Blogs";
import Forms from "./components/Forms";


export default function App() {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pages" element={<Blogs />} />
        <Route path="/user" element={<Forms />} />
      </Routes>

      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            padding: "10px 20px", 
            backgroundColor: "teal",
            color: "#F8F9FA",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            fontSize: "24px",
            boxSizing: "border-box",
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}

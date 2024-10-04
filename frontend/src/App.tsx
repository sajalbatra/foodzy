import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Menu from "./components/MenuPage/Menu";
import Blogs from "./components/Blogs";
import Forms from "./components/Forms";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pages" element={<Blogs />} />
        <Route path="/user" element={<Forms/>} />
      </Routes>
    </>
  );
}


// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./Home";
// import About from "./components/About";
// import Menu from "./components/MenuPage/Menu";
// import Blogs from "./components/Blogs";
// import Forms from "./components/Forms";
// import NotFound from './components/NotFound'; // Import your NotFound component
// import Footer from './components/Footer'; // Optionally import Footer

// export default function App() {
//   return (
//     <Router>
//       <>
//         <Routes>
//           <Route path="/home" element={<Navigate to="/" replace />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/pages" element={<Blogs />} />
//           <Route path="/user" element={<Forms />} />
          
//           /* Catch-all route for 404
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer /> Optionally include Footer */
//       </>
//     </Router>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Menu from "./components/MenuPage/Menu";
import Blogs from "./components/Blogs";
import Forms from "./components/Forms";
import NotFound from "./components/NotFound"; // Import the 404 component

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pages" element={<Blogs />} />
        <Route path="/user" element={<Forms />} />
        
        {/* Catch-all route for undefined pages */}
        <Route path="*" element={<NotFound />} /> {/* This should be the last */}
      </Routes>
    </>
  );
}

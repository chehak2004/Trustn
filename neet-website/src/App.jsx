import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // import Navbar once
import Home from "./pages/Home/Home";
import Reviews from "./pages/Reviews/Reviews";
import FAQs from "./pages/FAQs/FAQs";
import ReadMore from "./pages/ReadMore/ReadMore";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* This shows on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/readmore" element={<ReadMore />} />
      </Routes>
    </Router>
  );
};

export default App;


import NavBar from "./components/NavBar";
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ValueProp from "./pages/ValueProp";
import SolutionPage from "./pages/SolutionPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/value" element={<ValueProp />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

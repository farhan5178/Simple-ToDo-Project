import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <nav style={{ backgroundColor: "#333", padding: "1rem" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/todo" style={{ color: "#fff", marginRight: "15px" }}>
          To-Do Page
        </Link>
        <Link to="/about" style={{ color: "#fff" }}>
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;


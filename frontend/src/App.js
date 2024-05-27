// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project1" element={<Home />} />
        <Route path="/Project2" element={<Home />} />
        <Route path="/Project3" element={<Home />} />
        <Route path="/Project4" element={<Home />} />
        <Route path="/Project5" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

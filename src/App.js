import Contact from "./components/Contact/Contact";
import Info from "./components/Info/Info";
import Landing from "./components/Landing/Landing";
import Work from "./components/Work/Work";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/work" element={<Work />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

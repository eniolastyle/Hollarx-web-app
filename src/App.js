import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Signup } from "./pages";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signup" element={<Signup />} exact />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

const App = () => {
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <Router>
      {/* <Header /> */}
      <div className="app" style={themeColor}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Level1" element={<Level1 />} />
          <Route path="/Level2" element={<Level2 />} />
          <Route path="/Level3" element={<Level3 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

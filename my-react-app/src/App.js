import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" exact element={<Home/>} />
            <Route path="/product" exact element={<Product/>}  />
            <Route path="/about" exact element={<About/>}  />
            <Route path="/signup" exact element={<Signup/>}  />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

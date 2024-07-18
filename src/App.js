import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Header from "./components/Header";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Header />
        <Routes>
         <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

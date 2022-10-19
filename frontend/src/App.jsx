import "./App.css";
import Features from "./components/Features";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
function App() {
  return (
    <div className=" w-auto h-auto px-5 py-5 bg-purple-800 font-roboto min-h-[100vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Form />} />
          <Route path="/" element={<Intro />} />
        </Routes>

        <Features />
      </Router>
    </div>
  );
}

export default App;

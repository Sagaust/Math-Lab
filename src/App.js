import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as ReactDOM from "react-dom";
import Home from "./components/Home/home";
import Collapsible from "./components/Shared/Navbar/Navbar";
import Math from "./components/LearningPage/Math/Math";
import ContactForm from "./components/ContactForm/Form";
import Vocabulary from "./components/LearningPage/Vocabulary";
import Footer from "./components/Shared/Footer/Footer";
import Planner from "./components/Journal/Planner";
import Login from "./components/LandingPage/AvatarSelector";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Collapsible />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Math" element={<Math />} />
          <Route path="/Planner" element={<Planner />} />
          <Route path="/Vocabulary" element={<Vocabulary />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Login" element={<Login />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

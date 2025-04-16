import React from "react";                       
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./com/Navbar";
import Gallery from "./pages/Gallery";
import GueestBook from "./pages/GuestBook";
import ScrollText from "./pages/ScrollText";
import "./App.css";
function App() {
  return (
    // basename="/react11"
    <Router basename="/myproject">
        <div>
            <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/guestbook" element={<GueestBook/>}/>
                <Route path="/scrollText" element={<ScrollText/>}/>
              </Routes>
        </div>
    </Router>
  );
}

export default App;

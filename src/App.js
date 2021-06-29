import React from 'react'
import FlightSearchEngine from "./FlightSearchEngine/SearchEngine"
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./FlightSearchEngine/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <FlightSearchEngine />
      </Router>
    </div>
  );
}

export default App;

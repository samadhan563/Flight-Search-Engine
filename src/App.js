import React from 'react'
import FlightSearchEngine from "./FlightSearchEngine/SearchEngine"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./FlightSearchEngine/Navbar"
import OneWayFlight from "./FlightSearchEngine/OneWayFlight";
import FlightSideBar from "./FlightSearchEngine/FlightSideBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <FlightSearchEngine />
      </Router>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={FlightSearchEngine} />
          <Route path="/flight-with-return" exact component={FlightSideBar} />
          <Route path="/flight-one-way" exact component={OneWayFlight} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;

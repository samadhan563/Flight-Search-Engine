import React from "react";
import "./FlightSearchEngine.css";
import airoplane from "../Images/airplane.png";

function EmptyPage() {
  return (
    <div
      className="h-100 d-flex justify-content-center" style={{ alignItems: "center" }}>
      <div className="d-flex justify-content-center">
        <div>
          <div className="d-flex justify-content-center">
            <div style={{ height: "100px", width: "100px" }}>
              <img
                src={airoplane}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div
            className="text-muted"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Search for flights
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyPage;
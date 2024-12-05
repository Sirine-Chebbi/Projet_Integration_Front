import React from "react";
import Navbar from "../components/Navbar";
import "./RequestService.css";
import burImage from "../assets/bur.png";
import mecImage from "../assets/mec.png"; // Image in the bottom right
import { Button } from "primereact/button";

const RequestService = () => {
  return (
    <div>
      <Navbar />
      <div className="request-service-content">
        <div className="request-form-section">
          <h1 className="request-title">Request a Service</h1>
          <form className="request-form">
            <div className="form-group">
              <label>Type</label>
              <input type="text" placeholder="Plomberie" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" placeholder="Description" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="Location" />
            </div>
            <div className="form-group">
              <label>Budget</label>
              <input type="range" min="0" max="100" />
              <span className="budget-label">DT 0-100</span>
            </div>
			<div className="form-actions">
  <Button label="Take Pictures/Videos" severity="secondary" className="p-button-secondary" />
  <Button label="Submit" severity="warning" className="p-button-warning" />
</div>

          </form>
        </div>
        <div className="images-section">
          <img src={burImage} alt="Plumber with laptop" className="image-left" />
          <img src={mecImage} alt="Plumber fixing pipes" className="image-right" />
        </div>
      </div>
    </div>
  );
};

export default RequestService;

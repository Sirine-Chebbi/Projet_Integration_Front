import React from "react";
import Navbar from "../components/Navbar";
import "./ReqOrBrow.css";
import burrImage from "../assets/bur1.png";
import { Button } from "primereact/button";

const ReqOrBrow = () => {
  return (
    <div>
      <Navbar />
      <div className="home-request">
        <h1>Service</h1>
        
        {/* Conteneur pour les boutons et "Or" */}
        <div className="buttons-or">
          <Button label="Request" severity="secondary" raised />
          <h2>Or</h2>
          <Button label="Browse" severity="secondary" raised />
        </div>

        {/* Image en bas à droite */}
        <div className="image">
          <img src={burrImage} alt="Right" />
        </div>
      </div>
    </div>
  );
};

export default ReqOrBrow;

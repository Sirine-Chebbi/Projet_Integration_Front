import React from "react";
import Navbar from "../components/Navbar";
import "./HomeClient.css";
import burrImage from "../assets/bur1.png";
import { ListBox } from 'primereact/listbox';
import { Button } from "primereact/button";


const HomeClient = () => {
  return (
    <div>
      <Navbar />
      <div className="home-client">
        <h1>Welcome!</h1>
        <h1>How can I help you ?</h1>
        <div className="search-center" >
          
          <ListBox filter optionLabel="name" className="search" />
        </div>
        <div className="image-right">
          <img src={burrImage} alt="Right" />
        </div>
      </div>
    </div>
  );
};

export default HomeClient;

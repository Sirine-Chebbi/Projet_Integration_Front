import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import burImage from "../assets/bur.png";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { BackgroundLines } from "../components/ui/background-lines";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BackgroundLines svgOptions={{ duration: 3 }}>
        <div className="bur-section">
          <div className="bur-content">
            <h1 className="bur-title">SERVICES.TN</h1>
            <p className="bur-subtitle">Quicker, Cheaper, And BETTER</p>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Find Service"
                className="search-input"
              />
              <Button label="Get Started" severity="warning" />
            </div>
          </div>
          <div className="bur-image">
            <img src={burImage} alt="bur" />
          </div>
        </div>
        <div className="stats-section">
          <Card
            title="000"
            subTitle="Service requests"
            //header={}
            className="md:w-25rem"
          ></Card>

          <Card
            title="000"
            subTitle="Client Satisfaction"
            //header={}
            className="md:w-25rem"
          ></Card>

          <Card
            title="000"
            subTitle="Payement"
            className="md:w-25rem"
            //header={}
          ></Card>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Home;

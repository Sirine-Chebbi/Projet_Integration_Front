import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./LoginPage.css";
import { send_login } from "../services/AuthService";
import burImage from "../assets/bur.png"; 
import mecImage from "../assets/mec.png"; 

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Button } from "primereact/button";

import Navbar from "../components/Navbar";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [message, setMessage] = useState(
    "Password must be at least 6 characters long."
  );
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!passwordValid) {
      setMessage("Invalid form submission: Password is not valid.");
      return;
    }

    const result = await send_login(phoneNumber, password);

    if (result.success) {
      //navigate to home page

      navigate("/home");

      // Handle successful login (e.g., save token, redirect user)
    } else {
      setPasswordValid(false);
      setMessage(result.error);
      console.error("Login failed:", result);
      // Display error message to the user
    }
  };

  const validatePassword = (value) => {
    if (!value || value.length < 6) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
    if (value.length === 0) {
      setPasswordValid(true);
    }
  };

  return (
    <div className="page-container">
      <Navbar state={"login"} />

      <div className="login-container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group">
              <label>Phone Number:</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            {!passwordValid && <p style={{ color: "red" }}>{message}</p>}
          </div>

          <Button label="Submit" raised outlined className="p-button-warning" />
        </form>
      </div>

      <img src={burImage} alt="bureau" className="image-left" />
      <img src={mecImage} alt="mécanicien" className="image-right" />
    </div>
  );
}

export default Login;

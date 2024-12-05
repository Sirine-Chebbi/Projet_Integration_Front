import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import RegisterPhoneNumber from "./pages/RegisterPhoneNumber";
import VerifyCode from "./pages/VerifyCode";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequestService from "./pages/RequestService";
import "./App.css";
import Register from "./pages/Register";
import HomeClient from "./pages/HomeClient";
import ReqOrBrow from "./pages/ReqOrBrow";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-phone-number" element={<RegisterPhoneNumber />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home-client" element={<HomeClient />} />
          <Route path="/service-request" element={<ReqOrBrow />} />
          <Route path="/request-service" element={<RequestService />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import CandidateList from "../pages/CandidateList";
import CandidateDetail from "../pages/CandidateDetail";
import HomePage from "../pages/HomePage";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/home" element={<HomePage />} />

        <Route exact path="/candidates/:id" element={<CandidateDetail />} />
      </Routes>
    </div>
  );
}

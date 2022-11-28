import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import CandidateList from "../pages/CandidateList";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CandidateList />} />

        <Route exact path="/home" element={<CandidateList />} />
      </Routes>
    </div>
  );
}

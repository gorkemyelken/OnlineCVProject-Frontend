import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import CandidateList from "../pages/CandidateList";
import CandidateDetail from "../pages/CandidateDetail";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CandidateList />} />

        <Route exact path="/home" element={<CandidateList />} />

        <Route exact path="/candidates/:id" element={<CandidateDetail />} />
      </Routes>
    </div>
  );
}

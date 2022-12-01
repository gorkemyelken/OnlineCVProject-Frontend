import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CandidateService from "../services/CandidateService";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function CandidateDetail() {
  let { id } = useParams();
  const [candidate, setCandidate] = useState({});
  let candidateService = new CandidateService();
  useEffect(() => {
    candidateService.getById(id).then((result) => setCandidate(result.data));
  }, []);

  return (
    <div className="candidateDetailPage">
      <h1>{candidate.firstName}&nbsp;{candidate.lastName}</h1>
    </div>
  );
}

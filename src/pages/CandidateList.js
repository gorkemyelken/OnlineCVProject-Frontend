import React, { useEffect, useState } from "react";
import CandidateService from "../services/CandidateService";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data));
  }, []);

  return (
    <div>
      {candidates.map((candidate) => (
        <div key={candidate.id}>
            <p>{candidate.firstName}</p>
            <p>{candidate.lastName}</p>
        </div>
      ))}
    </div>
  );
}

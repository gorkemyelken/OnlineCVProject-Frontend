import React, { useEffect, useState } from "react";
import CandidateService from "../services/CandidateService";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Link from '@mui/material/Link';

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
        <div key={candidate.id} className="candidateListCard">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {candidate.firstName} {candidate.lastName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link href={`/candidates/${candidate.id}`}>More...</Link></Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

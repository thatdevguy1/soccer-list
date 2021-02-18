import React, { useState, useEffect } from "react";
import Team from "./Team/Team";
import axios from "axios";

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(async () => {
    const teams = await axios.get("/api/getAllTeams");
    setTeams(teams.data.teams);
    console.log(teams.data.teams);
  }, []);

  return (
    <div>
      {Array.isArray(teams) ? (
        teams.map((team, index) => {
          return <Team color={team.color} name={team.name} key={index} />;
        })
      ) : (
        <h1>No teams</h1>
      )}
    </div>
  );
}

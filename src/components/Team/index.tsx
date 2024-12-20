import { CSSProperties } from "react";
import People from "./People";
import TeamImage from "./TeamImage";

const header: CSSProperties = {
  fontSize: "3rem",
  textAlign: "center",
  fontWeight: 300,
  margin: "48px",
};

const Team = () => {
  return (
    <div id="team-leaders">
      <hr />
      <h2 style={header}>Pathfinder Team</h2>
      <People />
      <TeamImage />
    </div>
  );
};

export default Team;

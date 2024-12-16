import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { CSSProperties } from "react";

const header: CSSProperties = {
  fontSize: "3rem",
  margin: "3rem",
  textAlign: "center",
  fontWeight: 300,
}

const cardContainer: SxProps = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gap: "20px",
  justifyContent: "center",
}

const card: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  margin: "10px",
  borderRadius: "20px",
  bgcolor: "primary.main",
  boxShadow: 1,
}

const title: CSSProperties = {
  fontSize: "2rem",
  fontWeight: 500,
  marginBottom: "10px",
}

const link: CSSProperties = {
  textDecoration: "underline",
  fontStyle: "italic",
}

function awardLink(name: string, id: string) {
  return (
    <Link
      style={link}
      href={`https://www.nsf.gov/awardsearch/showAward?AWD_ID=${id}`}
      target="_blank"
    >
      {name}
    </Link>
  );
}

const Strategies = () => {
  return (
    <Box id="strategies">
      <hr />
      <h2 style={header}>Pathfinder Strategies</h2>
      <Box sx={cardContainer}>
        <Box sx={card}>
          <h3 style={title}>Hackathons</h3>
          <p>
            Annual, intense in-person meetings to tackle pressing technical
            topics across the collaboration. Builds on biweekly video
            conferences between scientists and experts.
          </p>
        </Box>
        <Box sx={card}>
          <h3 style={title}>Expanding Partnerships</h3>
          <p>
            As the collaboration becomes more established, integrating more
            partners like the {awardLink("NDP", "2333609")},{" "}
            {awardLink("DeltaAI", "2320345")},{" "}
            {awardLink("Stampede3", "2320757")}, {awardLink("SAGE", "2331263")},
            and {awardLink("NSDF", "2138811")}.
          </p>
        </Box>
        <Box sx={card}>
          <h3 style={title}>Joint Integrations</h3>
          <p>
            Co-developing software and integrations to ensure climate science
            tools can transparently access NDC-C cyberinfrastructure.
          </p>
        </Box>
        <Box sx={card}>
          <h3 style={title}>Broader Impacts</h3>
          <p>
            With the {awardLink("MS-CC", "2234326")}, working to empower climate
            scientists at Jackson State University to have local access to NCAR
            data.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Strategies;

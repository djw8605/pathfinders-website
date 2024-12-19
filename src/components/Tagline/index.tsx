import { Box, SxProps } from "@mui/material";
import { CSSProperties } from "react";
import Balancer from "react-wrap-balancer";
import Graphic from "./Graphic";

const taglineContainer: SxProps = {
  width: "100%",
  minHeight: "450px",
  display: "flex",
  margin: {
    xs: "20px 0",
    md: "0",
  },

  position: "relative",
  // left: "-100px",

  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const taglineText: CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
  fontWeight: 700,
};

const subtextContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const subtext: CSSProperties = {
  maxWidth: "1000px",
  fontSize: "1.25rem",
  textAlign: "center",
};

const Tagline = () => {
  return (
    <Box sx={taglineContainer}>
      <Graphic />
      <span style={taglineText}>
        <Balancer>
          Advancing Earth Science and Innovating Data Access and Sharing
        </Balancer>
      </span>
      <br />
      <Box sx={subtextContainer}>
        <span style={subtext}>
          A collaboration between 5 projects, working to innovate science-led
          pathways through the NSF cyberinfrastructure landscape, with the
          mission to to build exemplars using NDC-C-funded cyberinfrastructure
          for other earth science teams to follow.
        </span>
      </Box>
    </Box>
  );
};

export default Tagline;

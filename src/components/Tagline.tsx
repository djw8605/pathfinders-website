import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

const taglineContainer: SxProps = {
  width: "100%",
  height: "218px",
  display: "flex",
  position: "relative",

  justifyContent: "center",
  alignItems: "center",
};

const bgImage: CSSProperties = {
  position: "absolute",
  opacity: 0.1,
  zIndex: -1,
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

const taglineText: CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
};

const Tagline = () => {
  return (
    <Box sx={taglineContainer}>
      <Image
        style={bgImage}
        src="/badGraphic.png"
        alt="bad graphic"
        width={740}
        height={218}
      />
      <span style={taglineText}>
        Pathfinders: Advancing Earth System Science and Innovating Access and
        Sharing of Science Data
      </span>
    </Box>
  );
};

export default Tagline;

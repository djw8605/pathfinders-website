import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import React from "react";

const container: SxProps = {
  width: "100%",
  height: "100%",
};

const name: React.CSSProperties = {
  display: "block",
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
}

const logosContainer: SxProps = {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",

  gridTemplateAreas: `
    "a a b b"
    ". c c ."
  `,
}

const SonarAILogo = () => {
  return (
    <Box sx={container}>
      <span style={name}>Sonar AI</span>
      <Box sx={logosContainer}>
        <Image
          style={{ objectFit: "contain", gridTemplate: "a" }}
          src="images/logos/cu_logo.png"
          alt="CU Logo"
          width={192 * 0.4}
          height={184 * 0.4}
        />
        <Image
          style={{ objectFit: "contain", gridTemplate: "b" }}
          src="images/logos/cires_logo.png"
          alt="CIRES Logo"
          width={300 * 0.35}
          height={150 * 0.35}
        />
        <Image
          style={{ objectFit: "contain", gridTemplate: "c" }}
          src="images/logos/noaa_logo.png"
          alt="NOAA Logo"
          width={468 * 0.15}
          height={469 * 0.15}
        />
      </Box>
    </Box>
  );
};

export default SonarAILogo;

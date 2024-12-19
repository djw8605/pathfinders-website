import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";
import AwardLink from "../AwardLink";
import SonarAILogo from "./SonarAILogo";

const grid: SxProps = {
  width: "100%",
  display: "grid",
  padding: "20px 0",

  gap: "30px",
  gridAutoColumns: "1fr",
  gridTemplateAreas: `
    "a a b b"
    "c c d d"
    "e e e e"
  `,
};

const itemContainer: SxProps = {
  bgcolor: "primary.main",
  width: "100%",

  // margin: "10px",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: 1,

  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logo: CSSProperties = {
  width: "300px",
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
};

const nameAndAward: CSSProperties = {
  fontSize: "1.5rem",
  textAlign: "center",
  padding: "10px 0",
};

// pelican styles

const pelicanItem: SxProps = {
  ...itemContainer,
  bgcolor: "secondary.main",
  width: "100%",

  flexDirection: "row",
};

const pelicanLeft: SxProps = {
  maxWidth: "100%",
  marginRight: "20px",
  flexShrink: 0,
};

const pelicanLogo: CSSProperties = {
  ...logo,
  width: "200px",
  margin: "0 auto",
};

const pelicanRight = {
  display: "flex",
  flexGrow: 1,

  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const PartnerList = () => {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
  non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
  ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa,
  varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
  molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.`;

  return (
    <Box sx={grid}>
      <Box sx={itemContainer} gridArea="a">
        <Image
          style={logo}
          src="/images/logos/ncar_logo.png"
          alt="NCAR Logo"
          width={518 * 0.6}
          height={142 * 0.6}
        />
        <span style={nameAndAward}>
          NCAR &mdash; <AwardLink id="1852977" />
        </span>
        <p>{loremIpsum}</p>
      </Box>
      <Box sx={itemContainer} gridArea="b">
        <Image
          style={logo}
          src="/images/logos/pism_logo.png"
          alt="PISM Logo"
          width={1000 * 0.28}
          height={332 * 0.28}
        />
        <span style={nameAndAward}>
          PISM &mdash; <AwardLink id="2324718" />
        </span>
        <p>{loremIpsum}</p>
      </Box>
      <Box sx={itemContainer} gridArea="c">
        <Image
          style={logo}
          src="/images/logos/fiu_logo.svg"
          alt="FIU Logo"
          width={221.7}
          height={102.8}
        />
        <span style={nameAndAward}>
          EnviStor &mdash; <AwardLink id="2322308" />
        </span>
        <p>{loremIpsum}</p>
      </Box>
      <Box sx={itemContainer} gridArea="d">
        <SonarAILogo />
        <span style={nameAndAward}>
          Sonar AI &mdash; <AwardLink id="2311843" />
        </span>
        <p>{loremIpsum}</p>
      </Box>
      <Box sx={pelicanItem} gridArea="e">
        <Box sx={pelicanLeft}>
          <Image
            style={pelicanLogo}
            src="/images/logos/pelican_logo.png"
            alt="Pelican Logo"
            width={400}
            height={395}
          />
        </Box>
        <Box sx={pelicanRight}>
          <span style={nameAndAward}>
            Pelican &mdash; <AwardLink id="2324718" />
          </span>
          <p>{loremIpsum}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerList;

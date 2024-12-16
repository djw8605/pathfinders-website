import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

const container: SxProps = {
  display: { sm: "block", md: "flex" },
  flexWrap: "wrap",
  justifyContent: "center",
};

const card: SxProps = {
  display: "flex",
  padding: "20px",
  margin: "10px",
  // width: "2px",

  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  
  borderRadius: "20px",
  bgcolor: "primary.main",
  boxShadow: 1,
}

const headshot: CSSProperties = {
  width: "175px",
  height: "175px",
  borderRadius: "50%",
  objectFit: "cover",
}

const name: CSSProperties = {
  fontWeight: 500,
  margin: "10px 0",
}

const People = () => {
  return (
    <Box sx={container}>
      <Box sx={card}>
        <Image
          style={headshot}
          src="images/people/brian_bockelman.jpg"
          alt="Headshot of Brian Bockelman"
          width={200}
          height={200}
        />
        <h3 style={name}>Brian Bockelman</h3>
        <span>Principal Investigator</span>
        <span>Pelican</span>
      </Box>
      <Box sx={card}>
        <Image
          style={headshot}
          src="images/people/everette_joseph.jpg"
          alt="Headshot of Everette Joseph"
          width={200}
          height={200}
        />
        <h3 style={name}>Everette Joseph</h3>
        <span>Principal Investigator</span>
        <span>NCAR</span>
      </Box>
      <Box sx={card}>
        <Image
          style={headshot}
          src="images/people/andy_aschwanden.jpg"
          alt="Headshot of Andy Aschwanden"
          width={200}
          height={200}
        />
        <h3 style={name}>Andy Aschwanden</h3>
        <span>Principal Investigator</span>
        <span>PISM</span>
      </Box>
      <Box sx={card}>
        <Image
          style={headshot}
          src="images/people/leonardo_bobadilla.png"
          alt="Headshot of Leonardo Bobadilla"
          width={200}
          height={200}
        />
        <h3 style={name}>Leonardo Bobadilla</h3>
        <span>Principal Investigator</span>
        <span>EnviStor @ FIU</span>
      </Box>
      <Box sx={card}>
        <Image
          style={headshot}
          src="images/people/carrie_bell.png"
          alt="Headshot of Carrie Bell"
          width={200}
          height={200}
        />
        <h3 style={name}>Carrie Bell</h3>
        <span>Principal Investigator</span>
        <span>Sonar AI</span>
      </Box>
    </Box>
  );
};

export default People;

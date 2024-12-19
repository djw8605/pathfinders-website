import Hero from "@/components/Hero";
import News from "@/components/News";
import Strategies from "@/components/Strategies";
import Tagline from "@/components/Tagline";
import Team from "@/components/Team";
import { Box, SxProps } from "@mui/material";

const mainContainer: SxProps = {
  padding: {
    lg: "25px",
    md: "15px",
    xs: "8px",
  },
};

const Home = () => {
  return (
    <div>
      <Tagline />
      <Box sx={mainContainer}>
        <Hero />
        <News />
        <Strategies />
        <Team />
      </Box>
    </div>
  );
};

export default Home;

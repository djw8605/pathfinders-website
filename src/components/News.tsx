import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

const newsLink =
  "https://pelicanplatform.org/user-stories/2024/06/13/noaa-on-the-ospool";
const newsImage =
  "https://raw.githubusercontent.com/CHTC/Articles/main/images/noaa-banner.png";

const wrapper: SxProps = {
  display: {
    xs: "block",
    md: "flex",
  },
  padding: "0 20px 20px 20px",
  gap: "10px",
};

const imageWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: {
    xs: "100%",
    md: "300px",
  },
  maxWidth: "420px",
  flexShrink: 0,
  margin: "0 auto",
  marginBottom: {
    xs: "20px",
    md: 0,
  },
};

const image: CSSProperties = {
  objectFit: "cover",
  aspectRatio: 2,
  width: "100%",
  height: "auto",
};

const News = () => {
  return (
    <Link href={newsLink} target="_blank">
      <Box sx={wrapper}>
        <Box sx={imageWrapper}>
          <Image
            style={image}
            src={newsImage}
            alt="News"
            width={420}
            height={210}
          />
        </Box>
        <Box>
          <h3>
            NOAA funded marine scientist uses OSPool access to high throughput
            computing to explode her boundaries of research
          </h3>
          <p>
            Dr. Carrie Wall, a research scientist at the University of Colorado
            Boulder, shares how access to OSPool resources has allowed her team
            to expand the scope of their research and to fail, unconstrained by
            the cost of computing in the cloud and the associated restraints
            that places on research.
          </p>
        </Box>
      </Box>
    </Link>
  );
};

export default News;

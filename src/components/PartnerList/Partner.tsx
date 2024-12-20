import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import AwardLink from "../AwardLink";
import { CSSProperties, ReactNode } from "react";

const itemContainer: SxProps = {
  bgcolor: "primary.main",
  maxWidth: "100%",

  padding: "20px",
  borderRadius: "20px",
  boxShadow: 1,

  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logo: CSSProperties = {
  width: "200px",
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  flexGrow: 1,
};

const nameAndAward: CSSProperties = {
  fontSize: "1.25rem",
  textAlign: "center",
  flexShrink: 0,
};

type PartnerProps = (
  | {
      area: string;
      src: string;
      alt: string;
      name: string;
      width: number;
      height: number;
      awardId: string;
      text: string;
    }
  | {
      area: string;
      image: ReactNode;
      name: string;
      awardId: string;
      text: string;
    }
) & {
  itemStyles?: SxProps;
};

const Partner = (props: PartnerProps) => {
  return (
    <Box sx={{ ...itemContainer, ...props.itemStyles }} gridArea={props.area}>
      {"image" in props ? (
        props.image
      ) : (
        <Image
          style={logo}
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      )}
      <span style={nameAndAward}>
        {props.name} &mdash; <AwardLink id={props.awardId} />
      </span>
    </Box>
  );
};

export default Partner;
export { itemContainer, logo, nameAndAward };

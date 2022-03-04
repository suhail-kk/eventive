// material components
import { Typography } from "@mui/material";
export default function Field(props) {
  //props destructuring
  const { heading, subHeading,subHeading2 } = props;
  return (
    <>
      <Typography sx={{ color: "text.secondary" }}>{heading}</Typography>
      <Typography sx={{ color: "text.primary", mt: 1.5, mb: 3 }}>
        {subHeading}
      </Typography>
      <Typography sx={{ color: "#1f5c66", mt: .5, mb: 1,fontStyle:"italic"}}>
        {subHeading2}
      </Typography>
    </>
  );
}

// material components
import { Typography } from "@mui/material";
export default function Field(props) {
  //props destructuring
  const { heading, subHeading,subHeadingBold } = props;
  return (
    <>
      <Typography sx={{ color: "text.secondary" }}>{heading}</Typography>
      <Typography sx={{ color: "text.primary", mt: 1.5 }}>
        {subHeading}
      </Typography>
      <Typography sx={{ color: "text.primary", mt: 1.5,fontStyle:"bold"}}>
        {subHeadingBold}
      </Typography>

    </>
  );
}

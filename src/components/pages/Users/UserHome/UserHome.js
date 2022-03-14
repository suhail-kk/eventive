import { useState } from "react";
import { styled } from "@mui/material/styles";
import DeptPointList from "./DeptPointList";
import Grid from '@mui/material/Grid';
import DetailsView from "./DetailsView";
// padding count in pc and lap
// const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 92;

// root style for material container wrapper
const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  marginTop:"0dp",
  padding:"5dp",
  background:"#A0C9C3"
});



export default function UserHome() {
  const [open, setOpen] = useState(true);
  return (
    <RootStyle>
      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
      <Grid item sx={6} md={6} justifyContent="flex-end"><DeptPointList/></Grid> 
      <Grid item sx={6} md={6} justifyContent="flex-end"><DetailsView/></Grid>   
      </Grid> 
      </RootStyle>
  );
}


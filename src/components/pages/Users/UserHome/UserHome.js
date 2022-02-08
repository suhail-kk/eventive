import { useState } from "react";
// To create special styled components
import { styled } from "@mui/material/styles";
import DeptPointList from "./DeptPointList";
import DetailsView from "./DetailsView";
import Grid from '@mui/material/Grid';
import UserNavbar from "../utils/UserNavbar/UserNavbar";
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
});



export default function UserHome() {
  const [open, setOpen] = useState(true);
  return (
    <div>
    
      <Grid item sx={6} md={6} justifyContent="flex-end"><DeptPointList/></Grid>
     
      </div>
  );
}


import { useState } from "react";
// To create special styled components
import { styled } from "@mui/material/styles";
import DashboardNavbar from "../../../utils/DashboardLayout/DashboardNavbar";
import { Outlet } from "react-router";

// padding count in pc and lap
// const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 92;

// root style for material container wrapper
const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

// // main container wrapper
// const MainStyle = styled("div")(({ theme }) => ({
//   flexGrow: 1,
//   overflow: "auto",
//   minHeight: "100%",
//   paddingTop: APP_BAR_MOBILE + 24,
//   paddingBottom: theme.spacing(10),
//   [theme.breakpoints.up("lg")]: {
//     paddingTop: APP_BAR_DESKTOP + 24,
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2),
//   },
// }));



export default function UserHome() {
  const [open, setOpen] = useState(false);
  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(false)} />
     
      {/* <MainStyle>
        <Outlet/>
      </MainStyle> */}
    </RootStyle>
  );
}


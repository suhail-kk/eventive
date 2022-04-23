import { useEffect, useState,useContext } from "react";
import Page from "../../utils/Page";
import UsersCard from "./UsersCard";
import { Container, Box, Typography, Grid,Card } from "@mui/material";
import UserTypeConfig from "./UserTypeConfig";
import Divider from "@mui/material/Divider";
import DptPointTable from "./DptPointTable";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DateRangeIcon from "@mui/icons-material/DateRange";

//dept points service
import departmentPointsServices from "../../../services/departmentPointsServices";
//details services
import detailsService from "../../../services/detailsService";
import registrationService from "../../../services/registrationService";


import { styled } from "@mui/material/styles";

//loader
import Loader from "../../utils/Loader";

//context
import { loadingContext } from "../../../context/loadingContext";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

const events = {
  title: "Events",
  heading: "",
  Icon: EventNoteIcon,
  colorType: "error",
}
const participants={
  title: "Participants",
  heading: "5",
  Icon: SupervisorAccountIcon,
  colorType: "primary",
}
const teams={
  title: "Departments",
  heading: "5",
  Icon: AccountBalanceIcon,
  colorType: "info",
}
const days={
  title: "Days",
  heading: "",
  Icon: DateRangeIcon,
  colorType: "warning",
}

const Home = () => {
  const { loaderToggler } = useContext(loadingContext);
  const [points,setPoints] = useState({});
  const [details, setDetails] = useState([]);
  const [count,setCount] = useState([])
  var first = details[0];

  useEffect(() => {
    const getDepartmentPoints = async () => {
      try {
        loaderToggler(true);
        //get points
        const point = await departmentPointsServices.getPoints();
        setPoints(point.data.Department);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    const getInfo = async () => {
      try {
        loaderToggler(true);
        const pgmDetails = await detailsService.getDetails();
        setDetails(pgmDetails.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    const getRegistrationCount = async () => {
      try {
        loaderToggler(true);
        const getcount = await registrationService.getAllParticipants();
        setCount(getcount.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getRegistrationCount();
    getInfo();
    getDepartmentPoints();
  }, []);
  console.log(points);

  let counter = 0;
  for (const obj of count) {
   counter++;
  }

  return (
    <Page title={"Home Page"}>
      <Container maxWidth="xl">
      <Loader />
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>
        {
          details && details.map((data) => (
            <Grid
            component={ProfileCard}
            sx={{ mt: 2, p: 2 }}
            container
              direction="row"
            spacing={2}
          >
                <Grid container spacing={2} >
              <Grid item xs={6} md={8} sx={{p:1,mt:3}}>
                <Typography variant="h5" sx={{textStyle: 'bold'}}>
                    Participants
                </Typography>
              </Grid>
              <Grid item xs={6} md={4} sx={{p:1,mt:3}}>
                <Typography variant="h5" sx={{textStyle: 'italic'}}>
                  {counter}
                </Typography>
                </Grid>
                </Grid>

                <Grid container spacing={2} >
              <Grid item xs={6} md={8} sx={{p:1,mt:3}}>
                <Typography variant="h5" sx={{textStyle: 'bold'}}>
                    Teams
                </Typography>
              </Grid>
              <Grid item xs={6} md={4} sx={{p:1,mt:3}}>
                <Typography variant="h5" sx={{textStyle: 'italic'}}>
                  5
                </Typography>
                </Grid>
                </Grid>

                <Grid container spacing={2}>
              <Grid item xs={6} md={8} sx={{p:1,mt:3}}>
                <Typography variant="h5" sx={{textStyle: 'bold'}}>
                    Registration Status
                </Typography>
              </Grid>
              <Grid item xs={6} md={4} sx={{p:1,mt:3}}>
                <Typography variant="h5" sx={{textStyle: 'italic'}}>
                  {data.isRegistrationLock ? "Closed" : "Open"}
                </Typography>
                </Grid>
                </Grid>

                <Grid container spacing={2}>
              <Grid item xs={6} md={8} sx={{p:1,mt:3}}>
                <Typography variant="h5" sx={{textStyle: 'bold'}}>
                    Total Events
                </Typography>
              </Grid>
              <Grid item xs={6} md={4} sx={{p:1,mt:3}}>
                <Typography variant="h5" sx={{textStyle: 'italic'}}>
                  {data.totalEvent}
                </Typography>
                </Grid>
                </Grid>

          </Grid>
          ))
        }
       


      </Container>
      <Grid mt={3}>
        <Divider variant="inset" />
      </Grid>
      <Grid
              component={ProfileCard}
              sx={{ mt: 2, p: 2,m:2 }}
              container
                direction="row"
              spacing={2}
            >
              {Object.keys(points).map((keyName, i) => (
                  <Grid container spacing={2}>
                <Grid item xs={6} md={8} sx={{p:1,mt:3}}>
                  <Typography variant="h5" sx={{textStyle: 'bold'}} key={i}>
                      {keyName}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} sx={{p:1,mt:3}}>
                  <Typography variant="h5" sx={{textStyle: 'bold'}}>
                    {points[keyName]}
                  </Typography>
                  </Grid>
                  </Grid>
              ))}
            </Grid>
    </Page>
  );
};
export default Home;

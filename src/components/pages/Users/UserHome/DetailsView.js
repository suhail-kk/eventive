import { styled } from "@mui/material/styles";
import { useState, useEffect, useContext } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import Field from "../../../utils/Student/View/Field";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//context provider
// import {DetailsProvider} from "../../../../components/pages/SetDetails/Add/DetailsContext";

  // custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));
   
  const NUMBER = 1233;
  const STRING = "Anything";

export default function DetailsView() {

  // const { pgmname,date,place,inuaguration,guest,totalevents,days } = useContext(DetailsProvider);
  // const [name,setName] = pgmname;
  // const [dateOfPgm,setDate] = date;
  // const [placeOfPgm,setPlace] = place;
  // const [guestOfPgm,setGuest] = guest;
  // const [totaleventsOfPgm,setTotalevent] = totalevents;
  // const [daysOfPgm,setDays] = days;
  // const [inuagurationOfPgm,setInuaguration] = inuaguration;
    
  return (
    <Page title="Details" >
    <Container>
      <Grid
        component={ProfileCard}
        sx={{ p: 2,width:500,height:500,m:0}}
        container
        spacing={2}
      >
        
        <Grid
          item
          sm={12}
          xs={12}
          md={12}
          lg={12}
          justifyContent="flex-start"
          container
          direction="row"
        >
          <Typography variant="h4" gutterBottom>
          Details
        </Typography>
        </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Program Name" subHeading="dewd"/>
          </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Date" subHeading="dewd" />
          </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Place" subHeading="dewd" />
            </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Inuagration" subHeading="dewd" />
            </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Guest" subHeading="dewd" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Total Events" subHeading="dewd" />
          </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Number of Days" subHeading="dewd" />
          </Grid>
      </Grid>
    </Container>
  </Page>
  );
}

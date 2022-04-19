import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import DeptPointList from "./DeptPointList";

// material components
import { Typography, Grid, Card } from "@mui/material";
import DetailsView from "./DetailsView";
import Field from "../../../utils/Student/View/Field";

//details services
import detailsService from "../../../../services/detailsService";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

// root style for material container wrapper
const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  marginTop: "0dp",
  padding: "5dp",
  background: "#A0C9C3",
});

export default function UserHome() {
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const pgmDetails = await detailsService.getDetails();
        setDetails(pgmDetails.data);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
    getDetails();
  }, []);
  return (
    <RootStyle>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={6} md={6} justifyContent="flex-end">
          <DeptPointList />
        </Grid>
        {/* <Grid item sx={6} md={6} justifyContent="flex-end">
          <DetailsView />
        </Grid> */}
        {details &&
          details.map((data) => (
            <Grid
              component={ProfileCard}
              sx={{ p: 2, width: 500, height: 500, m: 0 }}
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
                <Field heading="Program Name" subHeading={data.pgmName} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Date" subHeading={data.date} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Place" subHeading={data.place} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Inuagration" subHeading={data.inuaguration} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Guest" subHeading={data.guest} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Total Events" subHeading={data.totalEvent} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Number of Days" subHeading={data.noOfDays} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field
                  heading="Registration Status"
                  subHeadingBold={data.isRegistrationLock ? "Closed" : "Open"}
                />
              </Grid>
            </Grid>
          ))}
      </Grid>
    </RootStyle>
  );
}

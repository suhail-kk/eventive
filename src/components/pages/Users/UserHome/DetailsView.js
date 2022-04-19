import { styled } from "@mui/material/styles";
import { useState, useEffect, useContext } from "react";
import { Container, Typography, Grid, Card } from "@mui/material";
import Field from "../../../utils/Student/View/Field";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//details services
import detailsService from "../../../../services/detailsService";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function DetailsView() {
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
  },[]);

  return (
    <Page title="Details">
      <Container>
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
      </Container>
    </Page>
  );
}

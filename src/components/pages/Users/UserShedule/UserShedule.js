// material components
import {
    Typography,
    Grid,
    Card,
    Container,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import Page from "../../../utils/Page";
  
  //   custom component
  import Field from "../../../utils/Student/View/Field";
   // custom card
  const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`,
  }));
  
  export default function UserShedule() {
    return (
      <Page title="SheduleList">

        {/* Father Details*/}
  
        <Container>
          <Grid
            component={ProfileCard}
            sx={{ mt: 2, p: 2 }}
            container
            spacing={2}
          >
            <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
              <Typography variant="h5" sx={{}}>
                Story Writing
              </Typography>
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field
                heading="Date"
                subHeading="12-02-2021"
              />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Time" subHeading="2:30pm" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Place" subHeading="avt hall" />
            </Grid>
          </Grid>
        </Container> 
    </Page>
  );
}
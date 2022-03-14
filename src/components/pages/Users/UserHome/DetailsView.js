import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import Field from "../../../utils/Student/View/Field";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

  // custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));
   
  const NUMBER = 1233;
  const STRING = "Anything";

export default function DetailsView() {
    
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
          <Field heading="Program Name" subHeading="olam" />
        </Grid>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Field heading="Date" subHeading="12-12-2021" />
        </Grid>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Field heading="Place" subHeading="avt hall" />
        </Grid>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Field heading="Inuagration" subHeading="MLA" />
        </Grid>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Field heading="Guest" subHeading="Mammootty" />
        </Grid>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Field heading="Total Events" subHeading="100" />
        </Grid>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Field heading="Number of Days" subHeading="5" />
        </Grid>
      </Grid>
    </Container>
  </Page>
  );
}

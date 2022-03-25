import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  Switch,
} from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//   custom component
import Field from "../../../utils/Student/View/Field";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function ViewDetails() {


  return (
    <Page title="Details"> 
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Details
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/details/add"
            startIcon={<AddIcon />}
          >
            Set Details
          </Button>
        </Stack>
        
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            lg={12}
            justifyContent="flex-end"
            container
            direction="row"
          >
            <EditIcon />
          </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Program Name" subHeading="kjw"/>
          </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Date" subHeading="kjw" />
          </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Place" subHeading="kjw" />
            </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Inuagration" subHeading="kjw" />
            </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Guest" subHeading="kjw" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Total Events" subHeading="kjw" />
          </Grid>
       
            <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Number of Days" subHeading="kjw"/>
          </Grid>
           
        </Grid>
      </Container>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Switch {...label} />
        <Typography>Lock Registration</Typography>
      </Grid>
    </Page>
  );
}

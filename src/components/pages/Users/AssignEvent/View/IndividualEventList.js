import { useState, useEffect, useContext } from "react";

// material components
import { Typography, Grid, Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../../../../utils/Page";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
//   custom component
import Field from "../../../../utils/Student/View/Field";

//context
import { loadingContext } from "../../../../../context/loadingContext";

//eventslist services
// import detailsService from "../../../../services/detailsService";

//loader
import Loader from "../../../../utils/Loader";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(2)} !important`,
  paddingBottom: `${theme.spacing(2)} !important`,
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AssignEventList() {
  return (
    <Page title="Assign Event">
      <Container>
        <Loader />
        <Grid component={ProfileCard} sx={{ mt: 2 }} container spacing={2}>
          <Grid sx={{}} item sm={6} xs={6} md={6} lg={6}>
            <Grid container rowSpacing={2} alignItems="center">
              <Item>
                <Typography variant="h5" sx={{}}>
                  Story Writing
                </Typography>
              </Item>
              <Item>
                <DeleteIcon />
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid component={ProfileCard} sx={{ mt: 2 }} container spacing={2}>
          <Grid sx={{}} item sm={6} xs={6} md={6} lg={6}>
            <Grid container rowSpacing={2} alignItems="center">
              <Item>
                <Typography variant="h5" sx={{}}>
                  Story Writing
                </Typography>
              </Item>
              <Item>
                <DeleteIcon />
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid component={ProfileCard} sx={{ mt: 2 }} container spacing={2}>
          <Grid sx={{}} item sm={6} xs={6} md={6} lg={6}>
            <Grid container rowSpacing={2} alignItems="center">
              <Item>
                <Typography variant="h5" sx={{}}>
                  Story Writing
                </Typography>
              </Item>
              <Item>
                <DeleteIcon />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

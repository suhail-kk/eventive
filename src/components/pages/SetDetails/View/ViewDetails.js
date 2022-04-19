import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  Link,
} from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//details services
import detailsService from "../../../../services/detailsService";

//   custom component
import Field from "../../../utils/Student/View/Field";

//context
import { loadingContext } from "../../../../context/loadingContext";

//loader
import Loader from "../../../utils/Loader";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function ViewDetails() {
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [details, setDetails] = useState([]);
  var first = details[0];

  useEffect(() => {
    const getDetails = async () => {
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
    getDetails();
  }, []);

  const handleDeleteDetails = (id) => {
    try {
      loaderToggler(true);
      detailsService.deleteDetails(id, details);
      navigate("/app/details/add");
      loaderToggler(false);
    } catch (err) {
      console.error(err?.response?.data?.message);
      loaderToggler(false);
    }
  };

  return (
    <Page title="Details">
      <Container>
        <Loader />
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
            disabled={first != null}
          >
            Set Details
          </Button>
        </Stack>
        {details &&
          details.map((data) => (
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
                <Button
                  component={RouterLink}
                  to={`/app/details/edit/${data._id}`}
                >
                  <EditIcon />
                </Button>
                <Button onClick={() => handleDeleteDetails(data._id)}>
                  <DeleteIcon />
                </Button>
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
                <Field heading="Inuaguration" subHeading={data.inuaguration} />
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
                  subHeading={data.isRegistrationLock ? "Locked" : "Not Locked"}
                />
              </Grid>
            </Grid>
          ))}
      </Container>
    </Page>
  );
}

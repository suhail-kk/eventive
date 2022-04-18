import { useState, useEffect, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Tooltip,
  Checkbox,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//importing details services
import detailsService from "../../../../services/detailsService";

//context
import { loadingContext } from "../../../../context/loadingContext";
import Loader from "../../../utils/Loader";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function AddDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [pgmName, setName] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();
  const [inuaguration, setInuaguration] = useState();
  const [guest, setGuest] = useState();
  const [totalEvent, setTotalevent] = useState();
  const [noOfDays, setDays] = useState();
  const [isRegistrationLock, setLock] = useState(false);

  const handlePgmnameChange = (pgmName) => setName(pgmName.target.value);
  const handleDateChange = (date) => setDate(date.target.value);
  const handlePlaceChange = (place) => setPlace(place.target.value);
  const handleInuagurationChange = (inuaguration) =>
    setInuaguration(inuaguration.target.value);
  const handleGuestChange = (guest) => setGuest(guest.target.value);
  const handleTotaleventChange = (totalEvent) =>
    setTotalevent(totalEvent.target.value);
  const handleDaysChange = (noOfDays) => setDays(noOfDays.target.value);
  const handleStatusChange = (isRegistrationLock) => {
    setLock(isRegistrationLock.target.checked);
  };
  //setState function
  function setState(data) {
    setName(data.pgmName);
    setDate(data.date);
    setPlace(data.place);
    setInuaguration(data.inuaguration);
    setGuest(data.guest);
    setTotalevent(data.totalEvent);
    setDays(data.noOfDays);
    setLock(data.isRegistrationLock);
  }

  useEffect(() => {
    const getDetailsById = async () => {
      try {
        loaderToggler(true);
        //get events
        const details = await detailsService.getDetailsById(id);
        setState(details.data);
        console.log(details.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getDetailsById();
  }, []);

  //clearing the form
  const clearFormCredentials = () => {
    setName("");
    setDate("");
    setPlace("");
    setInuaguration("");
    setGuest("");
    setTotalevent("");
    setDays("");
    setLock(false);
  };

  const handleAddDetails = async () => {
    try {
      loaderToggler(true);
      const detailsData = {
        pgmName,
        date,
        place,
        inuaguration,
        guest,
        totalEvent,
        noOfDays,
        isRegistrationLock,
      };
      // adding event to db
      if (!id) {
        const res = await detailsService.createDetails(detailsData);
        console.log(res);
        // clearing the form
        clearFormCredentials();
        navigate("../");
        loaderToggler(false);
      } else {
        //update event
        const updatedData = await detailsService.updateDetails(id, detailsData);
        console.log(updatedData);
        // clearing the form
        clearFormCredentials();
        navigate("../");
        loaderToggler(false);
      }
    } catch (err) {
      console.error(err?.response?.data?.message);
      loaderToggler(false);
    }
  };

  return (
    <Page title="AddDetails">
      <Container>
        <Loader />
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="pgmName"
                label="Program name"
                color="info"
                fullWidth
                value={pgmName}
                onChange={handlePgmnameChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="date"
                label="Date"
                color="info"
                fullWidth
                value={date}
                onChange={handleDateChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="place"
                label="Place"
                color="info"
                fullWidth
                value={place}
                onChange={handlePlaceChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="inuaguration"
                label="Inuaguration"
                color="info"
                fullWidth
                value={inuaguration}
                onChange={handleInuagurationChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="guest"
                label="Special Guest"
                color="info"
                fullWidth
                value={guest}
                onChange={handleGuestChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="totalEvent"
                label="Total Events"
                color="info"
                fullWidth
                value={totalEvent}
                onChange={handleTotaleventChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="noOfDays"
                label="Number of Days"
                color="info"
                fullWidth
                value={noOfDays}
                onChange={handleDaysChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography>Lock Registration</Typography>
              <Checkbox
                checked={isRegistrationLock}
                onChange={handleStatusChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Grid>
          </Grid>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            mt={2}
          >
            <Tooltip
              title={
                !pgmName ||
                !date ||
                !place ||
                !guest ||
                !inuaguration ||
                !totalEvent
                  ? "fill the fields"
                  : "sumbit fields"
              }
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  onClick={handleAddDetails}
                  // disabled={!pgmName || !date || !place || !inuaguration || !guest || !noOfDays}
                  startIcon={<PublishIcon />}
                >
                  Add
                </Button>
              </span>
            </Tooltip>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}

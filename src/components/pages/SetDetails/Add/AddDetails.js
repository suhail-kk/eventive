import { useState } from "react";
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Tooltip,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DatePickerInput from "../../../utils/Inputs/DatePickerInput";

export default function AddDetails() {
  const [pgmName, setPgmName] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();
  const [inuagration, setInuagration] = useState();
  const [guest, setGuest] = useState();
  const [totalEvents, setTotalEvent] = useState();
  const [noOfDays, setNoOfDays] = useState();

  const handlePgmNameChange = (event) => setPgmName(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handlePlaceChange = (event) => setPlace(event.target.value);
  const handleInuagrationChange = (event) => setInuagration(event.target.value);
  const handleGuestChange = (event) => setGuest(event.target.value);
  const handleTotalEventChange = (event) => setTotalEvent(event.target.value);
  const handlesetNoOfDaysChange = (event) => setNoOfDays(event.target.value);

  // //clearing the form
  // const clearFormCredentials = () => {
  //   setPgmName("");
  //   setDate("");
  //   setPlace("");
  //   setInuagration("");
  //   setGuest("");
  //   setTotalEvent("");
  //   setNoOfDays("");
  // };
  console.log(pgmName);
  console.log(date);
  console.log(place);
  console.log(inuagration);
  console.log(guest);
  console.log(totalEvents);
  console.log(noOfDays);


  return (
    <Page title="AddDetails">
      <Container>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="pgmname"
                label="Program name"
                color="info"
                fullWidth
                onChange={handlePgmNameChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <DatePickerInput
                label="Date"
                date={date}
                name="date"
                setDate={setDate}
                onChange={handleDateChange}
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
                onChange={handleInuagrationChange}
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
                name="totalevents"
                label="Total Events"
                color="info"
                fullWidth
                onChange={handleTotalEventChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="days"
                label="Number of Days"
                color="info"
                fullWidth
                onChange={handlesetNoOfDaysChange}
                // error={errorMsg}
              />
            </Grid>
          </Grid>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            mt={2}
          >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  //   component={RouterLink}
                  //   onClick={handleAddStudent}
                  // disabled={!event || !setDate || !setPlace || !place}
                  //   to="#"
                  startIcon={<PublishIcon />}
                >
                  Add
                </Button>
              </span>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}

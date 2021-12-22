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
import AddCircleIcon from '@mui/icons-material/AddCircle';

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DatePickerInput from "../../../utils/Inputs/DatePickerInput";

export default function AddDetails() {
  const [pgmname, setName] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();
  const [inuaguration, setInuaguration] = useState();
  const [guest, setGuest] = useState();
  const [totalevents, setTotalevent] = useState();
  const [totalgroups, setTotalgroups] = useState();
  const [days,setDays] = useState();
  const [dptname,setDptName] = useState();

  const handlePgmnameChange = (pgmname) => setName(pgmname.target.value);
  // const handleDate = (pgmname) => setName(pgmname.target.value);
  const handlePlaceChange = (place) => setPlace(place.target.value);
  const handleInuagurationChange = (inuaguration) =>
    setInuaguration(inuaguration.target.value);
  const handleGuestChange = (guest) => setGuest(guest.target.value);
  const handleTotaleventChange = (totalevents) =>
    setTotalevent(totalevents.target.value);
  const handleTotalgroupsChange = (totalgroups) =>
    setTotalgroups(totalgroups.target.value);
  const handleDaysChange = (days) =>
    setDays(days.targent.value);
  const handleDptNameChange = (dptname) =>
    setDptName(dptname.target.value);

  //clearing the form
  const clearFormCredentials = () => {
    setName("");
    setDate("");
    setPlace("");
    setInuaguration("");
    setGuest("");
    setTotalevent("");
    setTotalgroups("");
    setDays("");
  };

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
                value={pgmname}
                onChange={handlePgmnameChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <DatePickerInput
                label="Date"
                date={date}
                name="date"
                setDate={setDate}
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
                name="totalevents"
                label="Total Events"
                color="info"
                fullWidth
                value={totalevents}
                onChange={handleTotaleventChange}
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
                value={days}
                onChange={handleDaysChange}
                // error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="totalgroups"
                label="Total Groups/Department"
                inputFormat="number"
                color="info"
                fullWidth
                value={totalgroups}
                onChange={handleTotalgroupsChange}
                // error={errorMsg}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="dptname"
                label="Departments Details"
                color="info"
                fullWidth
                value={dptname}
                onChange={handleDptNameChange}
                // error={errorMsg}
              />
            </Grid>
            <AddCircleIcon
                ms={2}
                alignItems="center"
            />
            
         </Grid>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            mt={2}
          >
            <Tooltip
              title={
                !pgmname ||
                !date ||
                !place ||
                !guest ||
                !inuaguration ||
                !totalevents ||
                !totalgroups
                  ? "fill the fields"
                  : "sumbit fields"
              }
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
            </Tooltip>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}

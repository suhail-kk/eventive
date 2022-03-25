import { useState,createContext  } from "react";
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
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import AddCircleIcon from '@mui/icons-material/AddCircle';

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

export const DetailsContext = createContext();

export default function AddDetails() {
  const [pgmname, setName] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();
  const [inuaguration, setInuaguration] = useState();
  const [guest, setGuest] = useState();
  const [totalevents, setTotalevent] = useState();
  const [days,setDays] = useState();
    const navigate = useNavigate();


  const handlePgmnameChange = (pgmname) => setName(pgmname.target.value);
  const handleDateChange = (place) => setDate(date.target.value);
  const handlePlaceChange = (place) => setPlace(place.target.value);
  const handleInuagurationChange = (inuaguration) =>
    setInuaguration(inuaguration.target.value);
  const handleGuestChange = (guest) => setGuest(guest.target.value);
  const handleTotaleventChange = (totalevents) =>
    setTotalevent(totalevents.target.value);
  const handleDaysChange = (days) =>
    setDays(days.target.value);

  //clearing the form
  const clearFormCredentials = () => {
    setName("");
    setDate("");
    setPlace("");
    setInuaguration("");
    setGuest("");
    setTotalevent("");
    setDays("");
  };

  return (
    <Page title="AddDetails">
      <Container>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <DetailsContext.Provider 
              value={{pgmname:[pgmname,setName],
              date:[date,setDate],
              place:[place,setPlace],
              inuaguration:[inuaguration,setInuaguration],
              guest:[guest,setGuest],
              totalevents:[totalevents,setTotalevent],
              days:[days,setDays],
            }}>
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
            </DetailsContext.Provider>
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
                !totalevents
                  ? "fill the fields"
                  : "sumbit fields"
              }
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  // onClick={handleAddDetails}
                  // disabled={!pgmname || !date || !place || !inuaguration || !guest || !days}
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

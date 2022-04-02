import { useEffect, useState, useContext } from "react";
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Tooltip,
  Autocomplete,
  MenuItem,
  InputLabel,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import { useParams } from "react-router-dom";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import eventService from "../../../../services/eventsService";
import DatePickerInput from "../../../utils/Inputs/DatePickerInput";
import TimePickerInput from "../../../utils/Inputs/TimePickerInput";
import sheduleService from "../../../../services/sheduleService";

//context
import { loadingContext } from "../../../../context/loadingContext";

export default function AddShedule() {
  const { id } = useParams();
  const { loaderToggler } = useContext(loadingContext);
  const [eventName, setEventName] = useState();
  const [sheduleTime, setTime] = useState();
  const [shedulePlace, setPlace] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [sheduleDate, setDate] = useState();
  const [events, setEvents] = useState([]);
  const [menuItem,setMenuItem] =useState();
  const clearError = () => setErrorMsg("");
  const handlePlaceChange = (event) => setPlace(event.target.value);
  const handleEventChange = (event) => setEventName(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);
  // const handleMenuItemChange = (event) => setMenuItem(event.target.value);

  //setState function
  function setState(data) {
    setEventName(data.eventName);
    setTime(data.sheduleTime);
    setPlace(data.shedulePlace);
    setDate(data.sheduleDate);
  }

  // clearing the form
  const clearEventCredentials = () => {
    setEventName();
    setPlace();
    setDate();
    setTime();
  };

  const handleAddShedule = async () => {
    try {
      loaderToggler(true);
      clearError();
      const sheduleData = {
        eventName,
        sheduleTime,
        sheduleDate,
        shedulePlace,
        isMarkEntered: false,
      };
      // adding shedule to db
      if (!id) {
        const res = await sheduleService.createShedule(sheduleData);
        // clearing the form
        console.log(res);
        clearEventCredentials();
        loaderToggler(false);
      } else {
        //update shedule
        const updatedData = await sheduleService.updateShedule(sheduleData);
        console.log(updatedData);
        // clearing the form
        clearEventCredentials();
        loaderToggler(false);
      }
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
      loaderToggler(false);
    }
  };

  useEffect(() => {
    //get all events
    const getAllEvents = async () => {
      try {
        loaderToggler(true);
        //get events
        const event = await eventService.getAllEvents();
        setEvents(event.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllEvents();

    //get shedule by id
    const getSheduleById = async () => {
      try {
        loaderToggler(true);
        //get events
        const shedule = await sheduleService.getSheduleById(id);
        setState(shedule.data);
        console.log(shedule.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getSheduleById();
  }, []);

  return (
    <Page title="AddShedule">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Shedule an Event
          </Typography>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                select
                label="Event Name"
                onChange={handleEventChange}
                value={eventName}
                fullWidth
                name="eventName"
              >
                {events &&
                  events.map((menu) => (
                    <MenuItem value={menu.eventName}>{menu.eventName}</MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                varient="contained"
                name="date"
                label="Date"
                color="info"
                fullWidth
                value={sheduleDate}
                onChange={handleDateChange}
                error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                varient="contained"
                name="time"
                label="Time"
                color="info"
                fullWidth
                value={sheduleTime}
                onChange={handleTimeChange}
                error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                varient="contained"
                name="place"
                label="Place"
                color="info"
                fullWidth
                value={shedulePlace}
                onChange={handlePlaceChange}
                error={errorMsg}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="body1" gutterBottom color="error">
                {errorMsg}
              </Typography>
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
                !eventName || !sheduleTime || !shedulePlace || sheduleDate
                  ? "fill the fields"
                  : "sumbit fields"
              }
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  onClick={handleAddShedule}
                  disabled={
                    !eventName || !sheduleDate || !sheduleTime || !shedulePlace
                  }
                  startIcon={<PublishIcon />}
                >
                  Submit
                </Button>
              </span>
            </Tooltip>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}

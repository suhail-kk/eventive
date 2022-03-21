import { useEffect, useState,useContext } from "react";
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
  InputLabel
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import eventService from "../../../../services/eventsService"
import DatePickerInput from "../../../utils/Inputs/DatePickerInput";
import TimePickerInput from "../../../utils/Inputs/TimePickerInput";
import sheduleService from "../../../../services/sheduleService";

//context
import { loadingContext } from "../../../../context/loadingContext";


export default function AddShedule() {
  const { loaderToggler } = useContext(loadingContext);
  const [eventName, setEventName] = useState();
  const [sheduleTime, setTime] = useState();
  const [shedulePlace, setPlace] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [sheduleDate, setDate] = useState();
  const [events, setEvents] = useState([]);
  
  const handlePlaceChange = (event) => setPlace(event.target.value);
  const clearError = () => setErrorMsg("");

  const handleEventChange = (event) => setEventName(event.target.value);
  

  // clearing the form
  const clearEventCredentials = () => {
    setEventName("");
    setPlace("");
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
      const res = await sheduleService.createShedule(sheduleData);
      // clearing the form
      console.log(res)
      clearEventCredentials();
      loaderToggler(false);
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
      loaderToggler(false);
    }
  };



  useEffect(() => {
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
        >
          {
            events && events.map((menu)=>(
              <MenuItem value={menu.eventName}>{menu.eventName}</MenuItem>
            ))
          }         
        </TextField>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <DatePickerInput
                label="Date"
                views={["day", "month", "year"]}
                format="DD-MM-YYYY"
                date={sheduleDate}
                name="date"
                setDate={setDate}
                showMonthYearPicker         
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TimePickerInput
                lable="TimePicker"
                time={sheduleTime}
                name="time"
                setTime={setTime}
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
                !eventName || !sheduleTime || !shedulePlace || sheduleDate ? "fill the fields" : "sumbit fields"
              }
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  onClick={handleAddShedule}
                  disabled={!eventName || !sheduleDate || !sheduleTime || !shedulePlace}
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

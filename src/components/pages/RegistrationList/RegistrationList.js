import { Link as RouterLink } from "react-router-dom";
// material components
import {
  Stack,
  Container,
  Typography,
  Grid,
  Autocomplete,
  TextField,
  MenuItem,
} from "@mui/material";

// page wrapper for dynamic meta tags
import Page from "../../utils/Page";
import DataTable from "../../utils/DataTable";
import SelectInput from "../../utils/Inputs/SelectInput";
import registrationService from "../../../services/registrationService";
import eventService from "../../../services/eventsService";
import { useEffect, useState,useContext } from "react";

//context
import { loadingContext } from "../../../context/loadingContext";

//loader
import Loader from "../../utils/Loader";

// table header cell config
const TABLE_HEAD = [
  {
    id: "candidateName",
    label: "Participant Name",
    alignRight: false,
    type: "stack",
  },
  { id: "department", label: "Department", alignRight: false, type: "text" },
  { id: "year", label: "Year", alignRight: false, type: "text" },
];


export default function RegistrationList() {
  const { loaderToggler } = useContext(loadingContext);
  const [eventName, setEventName] = useState();
  const [participants, setParticipants] = useState([]);
  const [events, setEvents] = useState([]);

  const handleEventChange = (event) => setEventName(event.target.value);

  useEffect(() => {
    const getAllParticipants = async () => {
      try {
        loaderToggler(true);
        //get partcipants
        const participant = await registrationService.getAllParticipants();
        setParticipants(participant);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllParticipants();

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
  }, []);
  console.log(participants.data);

  return (
    <Page title="Participants Data">
      <Container>
        <Loader/>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={6} sm={6} md={6}>
              <Typography variant="h4" gutterBottom>
            Participants Data
          </Typography></Grid>
          <Grid item xs={6} sm={6} md={6}>
          <TextField
                select
                label="Event Name"
                onChange={handleEventChange}
                value={eventName}
                fullWidth
              >
                {events &&
                  events.map((menu) => (
                    <MenuItem value={menu.eventName}>{menu.eventName}</MenuItem>
                  ))}
              </TextField>
          </Grid>
          </Grid>
          
          
        </Stack>
        {participants.data && (
          <DataTable TABLE_DATA={participants.data} TABLE_HEAD={TABLE_HEAD} />
        )}
      </Container>
    </Page>
  );
}

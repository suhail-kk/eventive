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
} from "@mui/material";
// material icons
import PublishIcon from "@mui/icons-material/Publish";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//importing the event service
import eventsService from "../../../../services/eventsService";
import SelectInput from "../../../utils/Inputs/SelectInput"

//context
import { loadingContext } from "../../../../context/loadingContext";


const Gender = ["Male", "Female"];


export default function EventsAdd() {
  const { loaderToggler } = useContext(loadingContext);
  const [eventName, setEvent] = useState();
  const [gender, setGender] = useState("Male");
  const [errorMsg, setErrorMsg] = useState("");


  const handleEventChange = (event) => setEvent(event.target.value);
  const clearError = () => setErrorMsg("");
 
  // clearing the form
  const clearEventCredentials = () => {
    setEvent("");
    setGender("Male");
  };

  const handleAddEvent = async () => {
    try {
      loaderToggler(true);
      clearError();
      const eventData = {
        eventName,
        gender,
        isMarkEntered: false,
        isPublished: false,
        isSheduled: false,
      };
      // adding event to db
      const res = await eventsService.createEvent(eventData);
      // clearing the form
      console.log(res)
      clearEventCredentials();
      loaderToggler(false);
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
      loaderToggler(false);
    }
  };

  return (
    <Page title="EventsAdd">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Event
          </Typography>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                varient="contained"
                name="event"
                label="Event"
                color="info"
                fullWidth
                value={eventName}
                onChange={handleEventChange}
                error={errorMsg}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
            <SelectInput
              label="Gender"
              name="gender"
              menuItems={Gender}
              dropdownValue={gender}
              setDropdownValue={setGender}
            />    
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              {/* <Typography variant="body1" gutterBottom color="error">
                {errorMsg}
              </Typography> */}
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
                 !eventName || !gender
                  ? "fill the fields"
                  : "sumbit fields"
              }
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  //   component={RouterLink}
                  onClick={handleAddEvent}
                  disabled={ !eventName  || !gender}
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

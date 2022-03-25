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
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import { useParams } from "react-router-dom";
//context
import { loadingContext } from "../../../../context/loadingContext";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import eventService from "../../../../services/eventsService";
import markentryService from "../../../../services/markentryService";
import registrationService from "../../../../services/registrationService";

const departments = ["BSC", "BA", "BBA", "BVOC", "BCOM"];

export default function AddMark() {
  const { id } = useParams();
  const { loaderToggler } = useContext(loadingContext);
  const [eventName, setEventName] = useState();
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [firstDept, setFirstDept] = useState();
  const [secondDept, setSecondDept] = useState();
  const [thirdDept, setThirdDept] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [results, setResults] = useState([]);
  const [participants, setParticipants] = useState([]);

  //setState function
  function setState(data) {
    setFirst(data.first);
    setSecond(data.second);
    setThird(data.third);
    setFirstDept(data.firstDept);
    setSecondDept(data.secondDept);
    setThirdDept(data.thirdDept);
  }

  // clearing the form
  const clearEventCredentials = () => {
    setEventName();
    setFirst();
    setSecond();
    setThird();
    setFirstDept();
    setSecondDept();
    setThirdDept();
  };

  const handleEventChange = (event) => setEventName(event.target.value);
  const handleFirstChange = (event) => setFirst(event.target.value);
  const handleSecondChange = (event) => setSecond(event.target.value);
  const handleThirdChange = (event) => setThird(event.target.value);
  const handleFirstDeptChange = (event) => setFirstDept(event.target.value);
  const handleSecondDeptChange = (event) => setSecondDept(event.target.value);
  const handleThirdDeptChange = (event) => setThirdDept(event.target.value);
  const clearError = () => setErrorMsg("");

  const handleAddMark = async () => {
    try {
      loaderToggler(true);
      const resultData = {
        eventName,
        first,
        second,
        third,
        firstDept,
        secondDept,
        thirdDept,
      };
      if (!id) {
        // adding result to db
        const res = await markentryService.createResult(resultData);
        // clearing the form
        console.log(res);
        clearEventCredentials();
        loaderToggler(false);
      } else {
        //update shedule
        const updatedData = await markentryService.updateResult(resultData);
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
        setResults(event.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllEvents();

    //get events by id
    const getEventsById = async () => {
      try {
        loaderToggler(true);
        //get events
        const event = await eventService.getEventsById(id);
        setEventName(event);
        console.log(event);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getEventsById();

    //get result by id
    const getResultById = async () => {
      try {
        loaderToggler(true);
        //get result
        const result = await markentryService.getResultById(id);
         setState(result.data);
        console.log(result);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getResultById();

    //get all participants
    const getAllParticipants = async () => {
      try {
        loaderToggler(true);
        //get events
        const participant = await registrationService.getAllParticipants();
        setParticipants(participant.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllParticipants();
  }, []);

  return (
    <Page title="AddMark">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Mark
          </Typography>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                select
                label="Event Name"
                onChange={handleEventChange}
                value={eventName}
                fullWidth
              >
                {results &&
                  results.map((menu) => (
                    <MenuItem value={menu.eventName}>{menu.eventName}</MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <TextField
                select
                label="First Price"
                onChange={handleFirstChange}
                value={first}
                fullWidth
              >
                {participants &&
                  participants.map((menu) => (
                    <MenuItem value={menu.candidateName}>
                      {menu.candidateName}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <TextField
                select
                label="Second Price"
                onChange={handleSecondChange}
                value={second}
                fullWidth
              >
                {participants &&
                  participants.map((menu) => (
                    <MenuItem value={menu.candidateName}>
                      {menu.candidateName}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <TextField
                select
                label="Third Price"
                onChange={handleThirdChange}
                value={third}
                fullWidth
              >
                {participants &&
                  participants.map((menu) => (
                    <MenuItem value={menu.candidateName}>
                      {menu.candidateName}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <TextField
                select
                label="Department"
                onChange={handleFirstDeptChange}
                value={firstDept}
                fullWidth
              >
                {departments.map((dept) => (
                  <MenuItem value={dept}>{dept}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <TextField
                select
                label="Department"
                onChange={handleSecondDeptChange}
                value={secondDept}
                fullWidth
              >
                {departments.map((dept) => (
                  <MenuItem value={dept}>{dept}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <TextField
                select
                label="Department"
                onChange={handleThirdDeptChange}
                value={thirdDept}
                fullWidth
              >
                {departments.map((dept) => (
                  <MenuItem value={dept}>{dept}</MenuItem>
                ))}
              </TextField>
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
                !eventName || !first || !firstDept
                  ? "fill the fields"
                  : "sumbit fields"
              }
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  //   component={RouterLink}
                  onClick={handleAddMark}
                  // disabled={!item || !first || !second || !third}
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

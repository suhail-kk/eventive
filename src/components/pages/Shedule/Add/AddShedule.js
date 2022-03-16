import { useEffect, useState } from "react";
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
import DataTable from "../../../utils/DataTable";

//importing the user service
import userService from "../../../../services/userService";
import DatePickerInput from "../../../utils/Inputs/DatePickerInput";
import TimePickerInput from "../../../utils/Inputs/TimePickerInput";
import SelectInput from "../../../utils/Inputs/SelectInput";

// table header cell config
const TABLE_HEAD = [
  { id: "item", label: "Name", type: "text" },
  { id: "event", label: "Company", type: "text" },
  { id: "status", label: "status", type: "userStatusChip" },
];

const TABLE_DATA = [
  {
    id: "134doojon",
    item: "Aseel",
    event: "aseelhacker@microsoft.com",
    status: "registered",
  },
  {
    id: "ounr34343",
    item: "Noof",
    event: "noof@google.com",
    status: "created",
  },
  {
    id: "343433ojnn",
    item: "Nahyan",
    event: "nahyan@facebook.com",
    status: "filled",
  },
  {
    id: "eonkn2434",
    item: "Dilshad",
    event: "dilshad@amazon.com",
    status: "created",
  },
];

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default function AddShedule() {
  const [event, setEvent] = useState();
  const [time, setTime] = useState();
  const [place, setPlace] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState();
  const [date, setDate] = useState();

  console.log(event);

  const handleEventChange = (event) => setEvent(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);
  const handlePlaceChange = (event) => setPlace(event.target.value);
  const clearError = () => setErrorMsg("");
  //   useEffect(() => {
  //     const getUsers = async () => {
  //       try {
  //         const users = await userService.getUsers();
  //         console.log(users);
  //         setUsers(users);
  //       } catch (err) {
  //         console.error(err?.response?.data?.message);
  //       }
  //     };
  //     getUsers();
  //   }, []);

  const handleAddStudent = async () => {
    try {
      clearError();
      const userData = {
        event,
        time,
        place,
        userType: "student",
      };
      // adding user to db
      await userService.createUser(userData);
      // clearing the form
      clearUserCredentials();
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
    }
  };

  // clearing the form
  const clearUserCredentials = () => {
    setEvent("");
    setTime("");
    setPlace("");
  };
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
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{overFlowY:"visible"}}
                name="event"
                onChange={(event, value) => console.log(value)}
                // onChange={handleItemChange}
                // style={}
                error={errorMsg}
                renderInput={(params) => <TextField {...params} label="Event" />}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <DatePickerInput
                label="Date"
                date={date}
                name="date"
                setDate={setDate}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TimePickerInput
                lable="TimePicker"
                time={time}
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
                value={place}
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
                !event || !time || !place ? "fill the fields" : "sumbit fields"
              }
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  //   component={RouterLink}
                  onClick={handleAddStudent}
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
        {users && <DataTable TABLE_DATA={users} TABLE_HEAD={TABLE_HEAD} />}
      </Container>
    </Page>
  );
}

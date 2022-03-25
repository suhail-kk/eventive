import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
// material components
import { Stack, Button, Container, Typography } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import eventService from "../../../../services/eventsService"

//context
import { loadingContext } from "../../../../context/loadingContext";

// table header cell config
const TABLE_HEAD = [
  {
    id: "eventName",
    label: "Event",
    alignRight: false,
    type: "stack",
  },
  { id: "gender", label: "Gender", alignRight: false, type: "text" },
  { id: "edit", label: "Edit", alignRight: false,type:"edit" },
  { id: "delete", label: "Delete", alignRight: false,type:"delete" },
];


export default function EventsList() {
  const { loaderToggler } = useContext(loadingContext);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getAllEvents = async () => {
      try {
        loaderToggler(true);
        //get events
        const event = await eventService.getAllEvents();
        setEvents(event);  
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllEvents();
  }, []);
  console.log(events.data);
  return (
    <Page title="EventsList">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Events List
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/events/add"
            startIcon={<AddIcon />}
          >
            Add Event
          </Button>
        </Stack>
        {
          events.data && (
            <DataTable TABLE_DATA={events.data} TABLE_HEAD={TABLE_HEAD} SEARCH_ID={events.data._id}/>
          )
        }
        
      </Container>
    </Page>
  );
}

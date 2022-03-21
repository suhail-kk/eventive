// material components
import {
  Typography,
  Grid,
  Card,
  Button,
  Container,
  Stack,
} from "@mui/material";
import { useEffect, useState,useContext } from "react";
import { styled } from "@mui/material/styles";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import eventService from "../../../../../services/eventsService";
// material icons
import PublishIcon from "@mui/icons-material/Publish";
//   custom component
import Field from "../../../../utils/Student/View/Field";

//context
import { loadingContext } from "../../../../../context/loadingContext";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

const RootStyle = styled("div")({
  background: "#A0C9C3",
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
}));

export default function AssignEventList() {
  const { loaderToggler } = useContext(loadingContext);
  const [checked, setChecked] = React.useState([]);
  const [events, setEvents] = useState();

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
  }, []);
  

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  console.log(checked)

  return (
    <RootStyle>
      <ContentStyle>
        <Container>
          <Grid
            component={ProfileCard}
            sx={{ mt: 2, p: 2, mb: 2 }}
            container
            spacing={2}
          >
            <Grid item sm={12} xs={12} md={12} lg={12}>
              <Typography variant="h5">Assign Event</Typography>
            </Grid>
            <List
              dense
              sx={{ width: "100%", bgcolor: "background.paper" }}
            >
              {events &&
                events.map((value) => {
                  const labelId = `checkbox-list-secondary-label-${value}`;
                  return (
                    <ListItem
                      key={value._id}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value.eventName)}
                          checked={checked.indexOf(value.eventName) !== -1}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText id={labelId} primary={value.eventName} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </List>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              mt={2}
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  startIcon={<PublishIcon />}
                >
                  Submit
                </Button>
              </span>
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}

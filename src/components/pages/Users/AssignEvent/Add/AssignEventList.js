// material components
import {
  Typography,
  Grid,
  Card,
  Button,
  Container,
  Stack,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
// material icons
import PublishIcon from "@mui/icons-material/Publish";
//   custom component
import Field from "../../../../utils/Student/View/Field";

//importing details services
import participantsDetailsServices from "../../../../../services/participantsDetailsServices";
import eventService from "../../../../../services/eventsService";

//context
import { loadingContext } from "../../../../../context/loadingContext";

//loader
import Loader from "../../../../utils/Loader";

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
  const { id } = useParams();
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [itemsList, setItemsList] = useState([]);
  const [events, setEvents] = useState();
  const candidateName = localStorage.getItem("candidateName");
 

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
    const currentIndex = itemsList.indexOf(value);
    const newChecked = [...itemsList];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setItemsList(newChecked);
  };
  console.log(itemsList);

  //clearing the form
  const clearFormCredentials = () => {
    setItemsList([]);
  };

  const handleAddDetails = async () => {
    try {
      loaderToggler(true);
      const detailsData = {
        candidateName: candidateName,
        itemsList: itemsList,
      };
    //  const userone = localStorage.getItem('registeredUser')
       console.log(detailsData);
       const res = await participantsDetailsServices.createParticipantDetails(
        detailsData
      );
      
        console.log(res.data);
        const id = res.data
        console.log('hh');
        // clearing the form
        clearFormCredentials();
        navigate("/user/landing");
        loaderToggler(false);
       if(id){

    //get event by id
   await participantsDetailsServices.getDetailsById(id)

      navigate("/user/assignEvenyView")
       }
        // //update event
        //  const updatedData =
        //    await participantsDetailsServices.updateParticipantsDetails(id,
        //          detailsData
        //         )

      // adding events list to db
      // if (!id) {
      //   const res = await participantsDetailsServices.createParticipantDetails(
      //     detailsData
      //   );
      //   console.log(res);
      //   // clearing the form
      //   clearFormCredentials();
      //   navigate("/user/landing");
      //   loaderToggler(false);
      // } else {
      //   //update event
      //   const updatedData =
      //     await participantsDetailsServices.updateParticipantsDetails(
      //       id,
      //       detailsData
      //     );
      //   console.log(updatedData);
      //   // clearing the form
      //   clearFormCredentials();
      //   navigate("/user/landing");
      //   loaderToggler(false);
      // }
    } catch (err) {
      console.error(err?.response?.data?.message);
      loaderToggler(false);
    }
  };

  return (
    <RootStyle>
      <ContentStyle>
        <Container>
          <Loader />
          <Grid
            component={ProfileCard}
            sx={{ mt: 2, p: 2, mb: 2 }}
            container
            spacing={2}
          >
            <Grid item sm={12} xs={12} md={12} lg={12}>
              <Typography variant="h5">Assign Event</Typography>
            </Grid>
            <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
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
                          checked={itemsList.indexOf(value.eventName) !== -1}
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
                  onClick={handleAddDetails}
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

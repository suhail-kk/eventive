import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Container, Typography, Grid } from "@mui/material";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import SelectInput from "../../../utils/Inputs/SelectInput";
import registrationService from "../../../../services/registrationService"
import { useEffect, useState,useContext } from "react";

//context
import { loadingContext } from "../../../../context/loadingContext";

//loader
import Loader from "../../../utils/Loader";

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


export default function ParticipantList() {
  const { loaderToggler } = useContext(loadingContext);
  const [participants, setParticipants] = useState([]);
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
  }, []);
  console.log(participants.data);
  return (
    <Page title="ParticipantsList">
      <Container>
      <Loader />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Participants List
          </Typography>
        </Stack>
        {
          participants.data && (
            <DataTable TABLE_DATA={participants.data} TABLE_HEAD={TABLE_HEAD} />

          )
        }
      </Container>
    </Page>
  );
}

import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Button, Container, Typography } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";

//Backend Service
import sheduleService from "../../../../services/sheduleService";

import { useState, useEffect,useContext } from "react";

//context
import { loadingContext } from "../../../../context/loadingContext";

//loader
import Loader from "../../../utils/Loader";

// table header cell config
const TABLE_HEAD = [
  {
    id: "eventName",
    label: "Event",
    alignRight: false,
    type: "stack",
  },
  { id: "sheduleDate", label: "Date", alignRight: false, type: "text" },
  { id: "sheduleTime", label: "Time", alignRight: false, type: "text" },
  { id: "shedulePlace", label: "Place", alignRight: false, type: "text" },
  { id: "edit", label: "Edit", alignRight: false,type:"edit" },
];

export default function SheduleList() {
  const { loaderToggler } = useContext(loadingContext);
  const [shedule, setShedule] = useState([]);
  useEffect(() => {
    const getAllShedules = async () => {
      try {
        loaderToggler(true);
        //get events
        const shedule = await sheduleService.getAllShedules();
        setShedule(shedule);  
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllShedules();
  }, []);
  
  console.log(shedule.data);
  return (
    <Page title="SheduleList">
      <Container>
        <Loader/>
        <Stack
          direction="row"
          alignevents="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Shedule List
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/shedule/add"
            startIcon={<AddIcon />}
          >
             Shedule
          </Button>
        </Stack> {
          shedule.data && (
            <DataTable TABLE_DATA={shedule.data} TABLE_HEAD={TABLE_HEAD} />
          )
        }
      </Container>
    </Page>
  );
}

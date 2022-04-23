import { Link as RouterLink } from "react-router-dom";
// material components
import {
  Stack,
  Container,
  Typography,
  Grid,
 Card
} from "@mui/material";

// page wrapper for dynamic meta tags
import Page from "../../utils/Page";
import participantsDetailsServices from "../../../services/participantsDetailsServices";
import { useEffect, useState,useContext } from "react";

//   custom component
import Field from "../../utils/Student/View/Field";

import { styled } from "@mui/material/styles";

//context
import { loadingContext } from "../../../context/loadingContext";

//loader
import Loader from "../../utils/Loader";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));


export default function RegistrationList() {
  const { loaderToggler } = useContext(loadingContext);
  const [eventName, setEventName] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItemsList = async () => {
      try {
        loaderToggler(true);
        //get partcipants deails with items list
        const list = await participantsDetailsServices.getAllParticipantDetails();
        setData(list.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getItemsList();
  }, []);
  console.log(data);

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
          {
            data && data.map((list) => (
              <Grid
              component={ProfileCard}
              sx={{ mt: 2, p: 2 }}
              container
              spacing={2}
            >
              <Grid item sm={12} xs={12} md={12} lg={12}>
                <Field heading="Candidate Name and Items" subHeading={list.candidateName} />
              </Grid>
              {list.itemsList && list.itemsList.map((item) => (
                   <Grid container spacing={2} >
                   <Grid item xs={6} md={8} sx={{p:1,mt:3}}>
                     <Typography>{item}</Typography>
                     </Grid>
                   </Grid>
              ))}
             
            </Grid>
            ))
          }
            </Grid>     
        </Stack>
      </Container>
    </Page>
  );
}

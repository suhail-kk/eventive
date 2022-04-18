// material components
import { Typography, Grid, Card, Container } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import sheduleService from "../../../../services/sheduleService";

//   custom component
import Field from "../../../utils/Student/View/Field";

//context
import { loadingContext } from "../../../../context/loadingContext";

//loader
import Loader from "../../../utils/Loader";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

const RootStyle = styled("div")({
  background: "#A0C9C3",
});

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  marginBottom:"2"
}));

export default function UserShedule() {
  const { loaderToggler } = useContext(loadingContext);
  const [shedules, setShedule] = useState([]);

  useEffect(() => {
    //get all shedules
    const getAllShedules = async () => {
      try {
        loaderToggler(true);
        //get shedule
        const shedule = await sheduleService.getAllShedules();
        setShedule(shedule.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllShedules();
  }, []);
  console.log(shedules);

  return (
    <RootStyle>
      <ContentStyle>
        <Container>
          <Loader/>
          {shedules &&
            shedules.map((value) => {
              return (
                <Grid component={ProfileCard} container spacing={2} sx={{ mt: 2, p: 2 }}>
                  <Grid item sm={12} xs={12} md={12} lg={12}>
                    <Typography variant="h5">{value.eventName}</Typography>
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field heading="Date" subHeading={value.sheduleDate} />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field heading="Time" subHeading={value.sheduleTime} />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field heading="Place" subHeading={value.shedulePlace} />
                  </Grid>
                </Grid>
              );
            })}
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}

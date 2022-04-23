import { useEffect, useState, useContext } from "react";

// material components
import { Stack, Container, Typography, Grid,Card } from "@mui/material";
import Page from "../../../utils/Page";

//context
import { loadingContext } from "../../../../context/loadingContext";

//details service
import departmentPointsServices from "../../../../services/departmentPointsServices";

import { styled } from "@mui/material/styles";

//loader
import Loader from "../../../utils/Loader";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));



export default function DepartmentPoints() {
  const { loaderToggler } = useContext(loadingContext);
  const [points,setPoints] = useState({});


  useEffect(() => {
    const getDepartmentPoints = async () => {
      try {
        loaderToggler(true);
        //get points
        const point = await departmentPointsServices.getPoints();
        setPoints(point.data.Department);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getDepartmentPoints();
  }, []);
  console.log(points);





  return (
    <Page title="Departments">
      <Container>
        <Loader />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Departments
          </Typography>
        </Stack>
        
        <Grid
              component={ProfileCard}
              sx={{ mt: 2, p: 2 }}
              container
                direction="row"
              spacing={2}
            >
              {Object.keys(points).map((keyName, i) => (
                  <Grid container spacing={2}>
                <Grid item xs={6} md={8} sx={{p:1,mt:3}}>
                  <Typography variant="h5" sx={{textStyle: 'bold'}} key={i}>
                      {keyName}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} sx={{p:1,mt:3}}>
                  <Typography variant="h5" sx={{textStyle: 'bold'}}>
                    {points[keyName]}
                  </Typography>
                  </Grid>
                  </Grid>
              ))}
            </Grid>
                
      </Container>
    </Page>
  );
}

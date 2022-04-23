import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";

// material components
import { Typography, Grid, Card } from "@mui/material";
import Field from "../../../utils/Student/View/Field";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//details services
import detailsService from "../../../../services/detailsService";
//details service
import departmentPointsServices from "../../../../services/departmentPointsServices";

//context
import { loadingContext } from "../../../../context/loadingContext";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

// root style for material container wrapper
const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  marginTop: "0dp",
  padding: "5dp",
  background: "#A0C9C3",
});

function createData(department, point) {
  return { department, point };
}

const rows = [
  createData("BSC", 159),
  createData("BA", 237),
  createData("BBA", 262),
  createData("BCOM", 305),
  createData("BVOC", 356),
];

export default function UserHome() {
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState();
  const { loaderToggler } = useContext(loadingContext);
  const [points, setPoints] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      try {
        const pgmDetails = await detailsService.gettDetails();
        setDetails(pgmDetails.data);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
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
    getDetails();
  }, []);

  return (
    <RootStyle>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }} direction="row">
          <Grid item xs={6}>
            {details &&
              details.map((data) => (
                <Grid
                  component={ProfileCard}
                  sx={{ p: 2, width: 500, height: 500, m: 0,ms:3 }}
                  container
                  spacing={2}
                >
                  <Grid
                    item
                    sm={12}
                    xs={12}
                    md={12}
                    lg={12}
                    justifyContent="flex-start"
                    container
                    direction="row"
                  >
                    <Typography variant="h4" gutterBottom>
                      Details
                    </Typography>
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field heading="Program Name" subHeading={data.pgmName} />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field heading="Date" subHeading={data.date} />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field heading="Place" subHeading={data.place} />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field
                      heading="Inuagration"
                      subHeading={data.inuaguration}
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field heading="Guest" subHeading={data.guest} />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field
                      heading="Total Events"
                      subHeading={data.totalEvent}
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field
                      heading="Number of Days"
                      subHeading={data.noOfDays}
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Field
                      heading="Registration Status"
                      subHeadingBold={
                        data.isRegistrationLock ? "Closed" : "Open"
                      }
                    />
                  </Grid>
                </Grid>
              ))}
          </Grid>
          <Grid item xs={6}>
            <Grid
              component={ProfileCard}
              sx={{ p: 2, width: 500, height: 500, m: 0 }}
              container
              direction="row"
              spacing={2}
            >
              {Object.keys(points).map((keyName, i) => (
                <Grid container spacing={2}>
                  <Grid item xs={6} md={8} sx={{ p: 1, mt: 3 }}>
                    <Typography variant="h5" sx={{ textStyle: "bold" }} key={i}>
                      {keyName}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4} sx={{ p: 1, mt: 3 }}>
                    <Typography variant="h5" sx={{ textStyle: "bold" }}>
                      {points[keyName]}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          </Grid>
        </Grid>
    </RootStyle>
  );
}

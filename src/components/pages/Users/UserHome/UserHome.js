import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";

// material components
import { Typography, Grid, Card } from "@mui/material";
import Field from "../../../utils/Student/View/Field";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//details services
import detailsService from "../../../../services/detailsService";

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
  createData('BSC', 159),
  createData('BA', 237),
  createData('BBA', 262),
  createData('BCOM', 305),
  createData('BVOC', 356),
];


export default function UserHome() {
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const pgmDetails = await detailsService.getDetails();
        setDetails(pgmDetails.data);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
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
        {details &&
          details.map((data) => (
            <Grid
              component={ProfileCard}
              sx={{ p: 2, width: 500, height: 500, m: 0 }}
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
                <Field heading="Inuagration" subHeading={data.inuaguration} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Guest" subHeading={data.guest} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Total Events" subHeading={data.totalEvent} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field heading="Number of Days" subHeading={data.noOfDays} />
              </Grid>
              <Grid item sm={12} xs={12} md={4} lg={4}>
                <Field
                  heading="Registration Status"
                  subHeadingBold={data.isRegistrationLock ? "Closed" : "Open"}
                />
              </Grid>
            </Grid>
          ))}
      </Grid>
      <TableContainer component={Paper} sx={{width:500 ,m:5}}>
      <Table sx={{ width:500,height:500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Department</TableCell>
            <TableCell align="right">Point</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.department}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.department}
              </TableCell>
              <TableCell align="right">{row.point}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </RootStyle>
  );
}

// material components
import { Typography, Grid, Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../../../utils/Page";
import markentryService from "../../../../services/markentryService";
import { useEffect, useState } from "react";

//   custom component
import Field from "../../../utils/Student/View/Field";
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
}));

export default function ResultList() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    //get all results
    const getAllResults = async () => {
      try {
        //get result
        const result = await markentryService.getAllResults();
        setResults(result.data);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
    getAllResults();
  }, []);
  console.log(results);

  return (
    <RootStyle>
      <ContentStyle>
        <Container>
          {results &&
            results.map((value) => {
              return (
              <Grid
                component={ProfileCard}
                sx={{ mt: 2, p: 2 }}
                container
                spacing={2}
              >
                <Grid item sm={12} xs={12} md={12} lg={12}>
                  <Typography variant="h5">{value.eventName}</Typography>
                </Grid>
                <Grid item sm={12} xs={12} md={4} lg={4}>
                  <Field heading="First" subHeading={value.first} />
                  <Typography variant="caption">{value.firstDept}</Typography>
                </Grid>
                <Grid item sm={12} xs={12} md={4} lg={4}>
                  <Field heading="Second" subHeading={value.second} />
                  <Typography variant="caption">{value.secondDept}</Typography>
                </Grid>
                <Grid item sm={12} xs={12} md={4} lg={4}>
                  <Field heading="Third" subHeading={value.third} />
                  <Typography variant="caption">{value.thirdDept}</Typography>
                </Grid>
              </Grid>
             )})}
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}

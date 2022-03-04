// material components
import { Typography, Grid, Card, Button, Container,Stack} from "@mui/material";
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
// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

const RootStyle = styled("div")({
  background: "#A0C9C3",
});

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  height: "90vh",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
}));

export default function AssignEventList() {
  const [checked, setChecked] = React.useState([1]);

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
  return (
    <RootStyle>
      <ContentStyle>
        <Container>
          <Grid
            component={ProfileCard}
            sx={{ mt: 2, p: 2 }}
            container
            spacing={2}
          >
            <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
              <Typography variant="h5" sx={{}}>
                Assign Event
              </Typography>
            </Grid>
            <List
              dense
              sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
            >
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem
                    key={value}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar n°${value + 1}`}
                          src={`/static/images/avatar/${value + 1}.jpg`}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        id={labelId}
                        primary={`Line item ${value + 1}`}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            mt={2}
          >
            <span>
              <Button
                variant="contained"
                color="info"
                //   component={RouterLink}
                // onClick={handleAddStudent}
                // disabled={!item || !first || !second || !third}
                //   to="#"
                startIcon={<PublishIcon />}
              >
                
                Submit
              </Button>
            </span>
            </Stack>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}

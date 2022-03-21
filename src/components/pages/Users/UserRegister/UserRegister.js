import { useState ,useContext} from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Link, Card } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// import PasswordField from "./utils/PasswordField";
import TextInput from "../utils/TextInput";
import SubmitButton from "../utils/SubmitButton";
import SelectInput from "../../../utils/Inputs/SelectInput";
import registrationService from "../../../../services/registrationService";

//context
import { loadingContext } from "../../../../context/loadingContext";


const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  height: "90vh",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
}));

const RootStyle = styled("div")({
  background: "#A0C9C3",
});

const Gender = ["Male", "Female"];
const Year = ["First", "Second","Third"];
const Department = ["BSC","BA","BBA","BCOM","BVOC"]

export default function UserRegister() {
  const { loaderToggler } = useContext(loadingContext);
  const [candidateName, setCandidateName] = useState();
  const [admnNumber, setAdmnNumber] = useState();
  const [gender, setGender] = useState();
  const [department, setDepartment] = useState();
  const [year, setYear] = useState();

    // clearing the form
    const clearEventCredentials = () => {
      setCandidateName("");
      setAdmnNumber("");
    };

    const handleParticipantRegister = async () => {
      try {
        loaderToggler(true);
        const participantData = {
          candidateName,
          admnNumber,
          gender,
          department,
          year,
        };
        // adding result to db
        const res = await registrationService.createParticipants(participantData);
        // clearing the form
        console.log(res);
        clearEventCredentials();
        loaderToggler(false);
      } catch (err) {
        // setErrorMsg(err?.response?.data?.message);
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };

  return (
    <RootStyle>
      <ContentStyle>
        <Card sx={{ p: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h3" gutterBottom textAlign="center">
              Register
            </Typography>
          </Box>
          <Stack spacing={1}>
            <TextInput
              label="Candidate name"
              type="text"
              value={candidateName}
              setValue={setCandidateName}
            />
            <SelectInput
              label="Year"
              type="number"
              menuItems={Year}
              dropdownValue={year}
              setDropdownValue={setYear}
            />
            <SelectInput
              label="Department"
              type="text"
              menuItems={Department}
              dropdownValue={department}
              setDropdownValue={setDepartment}
            />
            <TextInput
              label="Admission Number"
              type="text"
              value={admnNumber}
              setValue={setAdmnNumber}
            />
            <SelectInput
              label="Gender"
              name="gender"
              menuItems={Gender}
              dropdownValue={gender}
              setDropdownValue={setGender}
            />      
            <SubmitButton
              name="Register"
              disabled={
                !candidateName || !year || !department || !admnNumber || !gender
                  ? true
                  : false
              }
                onClick={handleParticipantRegister}
            />
          </Stack>
        </Card>
      </ContentStyle>
    </RootStyle>
  );
}

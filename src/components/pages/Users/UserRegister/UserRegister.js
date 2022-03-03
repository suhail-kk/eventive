import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Card,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// import PasswordField from "./utils/PasswordField";
import TextInput from "../utils/TextInput";
import SubmitButton from "../utils/SubmitButton";
import SelectInput from "../../../utils/Inputs/SelectInput";


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
  background:"#A0C9C3"
});

export default function UserRegister() {
  const [candidateName, setCandidateName] = useState();
  const [year, setYear] = useState();
  const [department, setDepartment] = useState();
  const [admnNumber, setAdmnNumber] = useState();
  const [gender, setGender] = useState();
  const [male, setMale] = useState();
  const [female, setFemale] = useState();






//   const handleClick = () => {
//     const passwordLengthError = validatePasswordLength();
//     const passwordMatchError = validatePasswordMatch();
//     if (passwordLengthError || passwordMatchError) return;
//     console.log(userName, email, password, confirmPassword);
//   };

  return (
    <RootStyle>
      <ContentStyle>
        <Card sx={{ p: 2 }} >
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
            <TextInput
              label="Year"
              type="number"
              value={year}
              setValue={setYear}
            />
            <TextInput
              label="Department"
              type="text"
              value={department}
              setValue={setDepartment}
            />
            <TextInput
              label="Admission Number"
              type="text"
              value={admnNumber}
              setValue={setAdmnNumber}
            />
              <SelectInput label="Gender" name="gender" value={gender} setValue={setGender}>
                <option>Male</option>
                <option>Female</option>
              </SelectInput>
            
            <SubmitButton
              name="Register"
              disabled={
                !candidateName || !year || !department || !admnNumber || !gender
                  ? true
                  : false
              }
            //   onClick={handleClick}
            />
          </Stack>
        </Card>
      </ContentStyle>
      </RootStyle>
  );
}

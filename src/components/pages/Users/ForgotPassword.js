import { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card } from "@mui/material";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/authServices";
import { loadingContext } from "../../../context/loadingContext";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [authErrors, setAuthErrors] = useState();

  const clearError = () => setAuthErrors("");
  const handleClick = async () => {
    try {
      clearError();
      const data = {
        username,
        email,
      };
      // logging in user
      const response = await authService.forgotPassword(data);
      console.log(response.data.data);
      navigate(`/recover/${response.data.data.userToken}`);
    } catch (err) {
      console.error(err.response);
      setAuthErrors(err?.response?.data?.message);
    }
  };

  return (
    <ContentStyle>
      <Card sx={{ p: 5 }}>
        <Box sx={{ mb: 3 }}>
          <Typography textAlign="center" variant="h3" gutterBottom>
            Forgot Password
          </Typography>
        </Box>
        <Stack spacing={2}>
          <TextInput
            label="User name"
            type="text"
            value={username}
            setValue={setUserName}
          />
          <TextInput
            label="Email"
            type="email"
            value={email}
            setValue={setEmail}
          />

          <SubmitButton
            disabled={!username || !email ? true : false}
            name="Submit"
            onClick={handleClick}
          />
        </Stack>
      </Card>
    </ContentStyle>
  );
}

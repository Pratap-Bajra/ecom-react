import { Card, TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function LoginLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async () => {
    //API Call
    try {
      const data = await axios.post(`http://localhost:4000/api/auth/login`, {
        email,
        password,
      });

      saveToken(data.accessToken);
      navigate("/dashboard");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      height="50vh"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"25px"}
    >
      <Card sx={{ minWidth: "500px" }}>
        <Box
          p={4}
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Typography variant="h3">Login</Typography>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

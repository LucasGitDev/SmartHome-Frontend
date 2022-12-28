import { Grid, TextField, Paper, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [error, setError] = React.useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    AuthService.login(username, password)
      .then(() => {
        document.location.href = "#/";
      })
      .catch((error) => {
        setError(error.response.data.err);
      });
  };

  return (
    <div style={{ padding: 30 }}>
      <Paper style={{ padding: 30 }}>
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              value={username}
              onChange={handleUsernameChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={"password"}
              value={password}
              onChange={handlePasswordChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={handleSubmit}
            >
              {" "}
              Login{" "}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <span hidden={error === " "}>{error}</span>
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={() => {
                document.location.href = "#/auth/register";
              }}
            >
              {" "}
              Registrar{" "}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

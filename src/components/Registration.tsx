import { Grid, TextField, Paper, Button } from "@mui/material";
import React from "react";
import AuthService from "../services/auth.service";

export default function Registration() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState("");

  const [error, setError] = React.useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    AuthService.register(login, username, password)
      .then(() => {
        document.location.href = "#/auth/login";
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
              label="Nome"
              value={username}
              onChange={handleUsernameChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Login"
              value={login}
              onChange={handleLoginChange}
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
              Criar{" "}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <span hidden={error === " "}>{error}</span>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

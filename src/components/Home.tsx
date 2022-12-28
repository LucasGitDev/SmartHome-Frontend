import { Link } from "react-router-dom";
import { Grid, Switch, Paper, Button, FormControlLabel } from "@mui/material";
import React from "react";
import LedService from "../services/led.service";
import ButtonService from "../services/button.service";
import axios from "axios";
import AuthService from "../services/auth.service";

export default function HomePage() {
  const [isLedOn, setIsLedOn] = React.useState(false);
  const [button, setButton] = React.useState(false);

  const [user, setUser] = React.useState(AuthService.getCurrentUser().user);

  const intervalId = React.useRef<any>(null);

  const handleLedChange = () => {
    LedService.setLedStatus(!isLedOn ? 1 : 0)
      .then(() => {
        setIsLedOn(!isLedOn);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    const fetchLedStatus = async () => {
      LedService.getLedStatus()
        .then((response) => {
          setIsLedOn(response.value === 1);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchLedStatus();

    intervalId.current = setInterval(async () => {
      const res = await ButtonService.getButtonStatus();
      setButton(res.value === 1);
    }, 1000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <div style={{ padding: 30 }} className="home-page">
      <Paper style={{ padding: 30 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <h1>Cloud Device</h1>
          </Grid>
          <Grid item xs={12}>
            <h3>Logged as {user}</h3>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={handleLedChange}
            >
              {" "}
              Led {isLedOn ? "On" : "Off"}
            </Button>
          </Grid>
          <Grid item xs={12} className="home-page">
            <FormControlLabel
              control={<Switch color="secondary" readOnly checked={button} />}
              label="Botão"
            />
          </Grid>
        </Grid>
      </Paper>
      <Button
        style={{ marginTop: 20 }}
        variant="outlined"
        color="secondary"
        onClick={() => {
          window.location.href = "#/logout";
        }}
      >
        {" "}
        Logout{" "}
      </Button>
    </div>
  );
}

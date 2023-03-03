import React, { Fragment, useState, useSyncExternalStore } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import validator from "validator";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#2196f3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "DM Sans, sans-serif",
  },
  title: {
    marginBottom: theme.spacing(2),
    color: "#fff",
    textAlign: "center",
  },
  description: {
    marginBottom: theme.spacing(4),
    color: "#fff",
    textAlign: "center",
    maxWidth: 600,
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  button: {
    width: "100%",
    margin: theme.spacing(1),
    backgroundColor: "#2196f3",
    color: "#fff",
  },
}));

function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit1 = () => {
    if(email !== "" && password !== "") {
      let submitUser = {
        email: email,
        password: password,
      }

      console.log(submitUser)

    } else {
      alert("Please ensure that all fields are entered!")
    }
  }


  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Sign Up
      </Typography>
      <Typography variant="body1" className={classes.description}>
        Fill in the form below to create an account.
      </Typography>
      <Paper elevation={5} className={classes.paper}>
        <form noValidate autoComplete="off">
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={email}
            onChange={(email) => setEmail(email.target.value)}
            inputProps={{ maxLength: 30 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
            value={password}
            onChange={(password) => setPassword(password.target.value)}
            inputProps={{ maxLength: 30 }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick = {handleSubmit1}
          >
            SignIn
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignIn;

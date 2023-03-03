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
    // height: "100vh",
    backgroundColor: "#2196f3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "DM Sans, sans-serif",
    padding: theme.spacing(2)
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

function SignUp() {
  const classes = useStyles();

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState();
  const [validEmail, setValidEmail] = useState();
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [fName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");

  const handleCheckboxChange = (event) => {
    setShowAdditionalInfo(event.target.checked);
    if (!event.target.value) {
      setAdditionalInfo("");
      setServiceType("");
    }
  };

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const handleSubmit = () => {
    let submitUser = {
      firstName: fName,
      lastName: LName,
      email: email,
      password: password,
      location: location,
      serviceType: serviceType,
      serviceDesc: additionalInfo,
      isServiceProvider: showAdditionalInfo
    }
  }

  const handleSubmit1 = () => {
    if(fName !== "" && LName !== "" && email !== "" && password !== "" && password === confPassword && location !== "") {
      let submitUser = {
        firstName: fName,
        lastName: LName,
        email: email,
        password: password,
        location: location,
        serviceType: serviceType,
        serviceDesc: additionalInfo,
        isServiceProvider: showAdditionalInfo
      }
      console.log(submitUser)

    } else if (password !== confPassword) {
      alert("Passwords do not match please re-enter!")
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
            label="First Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={fName}
            onChange={(fName) => setFName(fName.target.value)}
            inputProps={{ maxLength: 30 }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={LName}
            onChange={(LName) => setLName(LName.target.value)}
            inputProps={{ maxLength: 30 }}
          />
          <TextField
            label="Primary Location"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={location}
            onChange={(location) => setLocation(location.target.value)}
            inputProps={{ maxLength: 30 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id='email'
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
            id='password'
            value={password}
            onChange={(password) => setPassword(password.target.value)}
            inputProps={{ maxLength: 30 }}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
            id='confirm_password'
            value={confPassword}
            onChange={(confPassword) =>
              setConfPassword(confPassword.target.value)
            }
            inputProps={{ maxLength: 30 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={showAdditionalInfo}
                onChange={handleCheckboxChange}
                name="showAdditionalInfo"
                color="primary"
              />
            }
            label="You are a Service Provider"
          />
          {showAdditionalInfo && (
            <Fragment>
              <TextField
                label="Your Service Type"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={serviceType}
                onChange={(serviceType) =>
                  setServiceType(serviceType.target.value)
                }
                inputProps={{ maxLength: 30 }}
              />
              <TextField
                label="About yourself and Contact Info"
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
                value={additionalInfo}
                onChange={handleAdditionalInfoChange}
                multiline
                minRows={4}
                inputProps={{ maxLength: 500 }}
              />
            </Fragment>
          )}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick = {handleSubmit1}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignUp;

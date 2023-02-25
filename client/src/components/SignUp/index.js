import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#2196f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'DM Sans, sans-serif',
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    marginBottom: theme.spacing(4),
    color: '#fff',
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  button: {
    width: '100%',
    margin: theme.spacing(1),
    backgroundColor: '#2196f3',
    color: '#fff',
  },
}));

function SignUpPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Sign Up
      </Typography>
      <Typography variant="body1" className={classes.description}>
        Fill in the form below to create an account.
      </Typography>
      <Paper elevation={3} className={classes.paper}>
        <form noValidate autoComplete="off">
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignUpPage;
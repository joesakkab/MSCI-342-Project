import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, TextField } from '@material-ui/core';
import NavBar from '../NavigationBar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'DM Sans, sans-serif', // Set the font family to DM Sans
  },
  test: {
    padding: theme.spacing(5),
    // display: 'flex', 
    // marginTop: theme.spacing(3), 
    // borderRadius: 50
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
    // backgroundColor: 'transparent', // Set the background color of the paper to transparent
  },
  button: {
    width: '100%',
    margin: theme.spacing(1),
    backgroundColor: '#2196f3', // Set the button background color to match the background color of the page
    color: '#fff', // Set the button text color to white
  },
}));


function Search() {
  const classes = useStyles();
  return (
    <div>
        <NavBar />
        <div className={classes.test}>
            <TextField  style={{ width:1000 }} placeholder="Search for a service ..." variant="outlined"  id="search"/>
        </div>
      
    </div>
  );
}

export default Search;
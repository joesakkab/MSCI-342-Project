import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import { Card, CardActionArea, CardContent } from '@material-ui/core'
import NavBar from '../NavigationBar';
import data from "./sample-data.json"
import Rating from '@material-ui/lab/Rating'
import PrivateRoute from '../Navigation/PrivateRoute';

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
    // marginTop: theme.spacing(2), 
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
  listing: {
    padding: theme.spacing(1)
  }
}));



function Search() {
  const classes = useStyles();
  return (
    <div>
        <NavBar />
        <div className={classes.test}>
            <TextField  style={{ width:1000 }} placeholder="Search for a service ..." variant="outlined"  id="search"/>
            <Button> Search </Button>
        </div>

        
            {data.map((obj) => (
                <div className={classes.listing}>
                    <Card style={{width: 1000}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography id="title" variant="h4">
                                    {obj.first + " " + obj.last + " - " + obj['serviceType']}
                                </Typography>
                                <Typography id="description">
                                    {obj.description}
                                </Typography>
                                <Typography sx={{fontWeight: 'bold'}} id="location">
                                    {obj["primaryLocation"]}
                                </Typography>
                                <Rating name="half-rating-read" defaultValue={obj.rating} precision={0.1} readOnly />
                                <Typography>
                                    {obj.rating + " / 5.0"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        
      
    </div>
  );
}

export default Search;
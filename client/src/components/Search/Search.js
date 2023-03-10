import React from 'react';
import useStyles from './Styles';
import { TextField, Button } from '@material-ui/core';


export default function Search(props) {

    const classes = useStyles();
    return (
        <div className={classes.searchArea}>
            <TextField 
            className={classes.searchBar}
            // onChange={handleSearchTermChange} 
            style={{ width: 1000 }} 
            placeholder="Search for a service ..." 
            variant="outlined" 
            id="search" 
            />

            <Button 
            type='submit'
            variant='outlined'
            color='primary'
            className={classes.button}
            // onClick={handleSearch}
            >
            Search 
            </Button>
        </div>
    )
}
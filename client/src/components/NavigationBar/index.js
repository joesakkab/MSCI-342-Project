import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import history from '../Navigation/history';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

const MovieAppBar = () => {
    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button 
                            color="inherit"
                            onClick={() => history.push('/Search')}
                        >
                            Search
                        </Button>
                        <Button 
                            color="inherit"
                            onClick={() => history.push('/Profile')}
                        >
                            Profile
                        </Button>
                        <Button 
                            color="inherit"
                            onClick={() => history.push('/SignOut')}
                        >
                            Sign Out
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default MovieAppBar;
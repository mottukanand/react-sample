import React, {Component,Fragment} from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });
  
class Header extends Component {
    render(){
        const { classes } = this.props;
        return(
            <Fragment>
                <CssBaseline />
                <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                    WELCOME
                    </Typography>
                    <Link style={{color:"white",paddingLeft:"20px", fontSize:"large"}} to="/" variant="body2">
                        SIGN IN
                    </Link>
                    <Link style={{color:"white",paddingLeft:"20px", fontSize : "large"}} to="/register" variant="body2">
                        SIGN UP
                    </Link>
                </Toolbar>
                </AppBar>
            </Fragment>
        )
    }
}

export default withStyles(useStyles)(Header)
import React, { Component,Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class CopyRight extends Component {
  render () {
    return (
        <Fragment>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Fragment>
    )
  }
}

export default CopyRight
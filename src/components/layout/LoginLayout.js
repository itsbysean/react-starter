import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import Header from './Header';
import LoginPage from '../user/LoginPage';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  content: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    marginTop: theme.spacing.unit * 10
  }
});

const LoginLayout = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Header classes={classes} open={false} />
      <main className={classes.content}>
        <LoginPage />
      </main>
    </div>
  );
};

export default withStyles(styles)(LoginLayout);

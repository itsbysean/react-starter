import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(3)
  }
});

class LoginForm extends Component {
  static defaultProps = {
    login: () => {}
  };

  state = {
    username: '',
    password: ''
  };

  setUsername = username => {
    this.setState({ username });
  };

  setPassword = password => {
    this.setState({ password });
  };

  submit = () => {
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Username</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              onChange={e => this.setUsername(e.target.value)}
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              onChange={e => this.setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.submit()}
            className={classes.submit}
          >
            Sign in
          </Button>
        </div>
      </Paper>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};
export default withStyles(styles)(LoginForm);

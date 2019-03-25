import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostPage from '../post/PostPage';

import NoMatch from '../error/NoMatch';

const Content = props => {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <Switch>
        <Route exact path="/dashboard" component={PostPage} />
        <Redirect exact from="/" to="/dashboard" />
        <Route exact path="*" component={NoMatch} />
      </Switch>
    </main>
  );
};

export default Content;

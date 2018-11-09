import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostPage from '../post/PostPage';

import NoMatch from '../error/NoMatch';

const Content = props => {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <Switch>
        <Route exact path="/post" component={PostPage} />
        <Redirect exact from="/" to="/post" />
        <Route exact path="*" component={NoMatch} />
      </Switch>
    </main>
  );
};

export default Content;

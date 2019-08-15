import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import classNames from 'classnames';

class SimpleHeader extends React.Component {
  static defaultProps = {
    handleDrawerOpen: () => {},
    open: false
  };

  render() {
    const { classes, open } = this.props;
    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar disableGutters={!open} className={classes.toolbar} />
      </AppBar>
    );
  }
}

SimpleHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default SimpleHeader;

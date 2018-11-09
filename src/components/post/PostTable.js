import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  table: {
    minWidth: 700
  },
  head: {
    whiteSpace: 'nowrap'
  }
});

class PostTable extends Component {
  static defaultProps = {
    posts: {
      data: [],
      loading: true,
      error: false
    }
  };

  render() {
    const { posts, classes } = this.props;
    return (
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>TITLE</TableCell>
              <TableCell className={classes.head}>USER ID</TableCell>
              <TableCell className={classes.head}>CONTENT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.data.map(post => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.userId}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

PostTable.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.shape({
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  })
};

export default withStyles(styles)(PostTable);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  table: {
    borderCollapse: 'collapse',
    width: '100%'
  },
  td_th: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px'
  }
};

export default class PostTable extends Component {
  constructor(props) {
    super(props);
    this.buildTable = this.buildTable.bind(this);
  }

  static defaultProps = {
    posts: {
      data: [],
      loading: true,
      error: false
    }
  };

  buildTable = data => {
    return (
      <table style={style.table}>
        <thead>
          <tr>
            <th style={style.td_th}>TITLE</th>
            <th style={style.td_th}>USER</th>
            <th style={style.td_th}>CONTENT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, idx) => (
            <tr key={idx}>
              <td style={style.td_th}>{obj.title}</td>
              <td style={style.td_th}>{obj.userId}</td>
              <td style={style.td_th}>{obj.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    const { posts } = this.props;
    return this.buildTable(posts.data);
  }
}

PostTable.propTypes = {
  posts: PropTypes.shape({
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  })
};

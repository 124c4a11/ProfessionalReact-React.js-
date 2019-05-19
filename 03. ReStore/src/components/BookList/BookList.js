import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';

import { booksLoaded } from '../../actions';

import { withBookstoreService } from '../HOC';
import BookListItem from '../BookListItem';


class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  };

  render() {
    const { books } = this.props;

    return (
      <ul className="book-list list-unstyled">
        {
          books.map((book) => {
            return <li key={ book.id }><BookListItem book={ book } /></li>;
          })
        }
      </ul>
    );
  }
};


const mapStateToProps = ({ books }) => ({ books });


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, { booksLoaded })
)(BookList);

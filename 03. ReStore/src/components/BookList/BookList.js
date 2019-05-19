import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';

import { booksLoaded, booksRequested, booksError } from '../../actions';

import { withBookstoreService } from '../HOC';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';


class BookList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError
    } = this.props;

    booksRequested();

    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => booksError(error));
  };

  render() {
    const { books, loading, error } = this.props;

    if (loading) return <Spinner />;

    if (error) return <ErrorIndicator />;

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


const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error
});


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, {
    booksLoaded,
    booksRequested,
    booksError
  })
)(BookList);

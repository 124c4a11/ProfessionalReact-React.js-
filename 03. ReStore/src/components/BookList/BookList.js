import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';

import { booksLoaded, booksRequested } from '../../actions';

import { withBookstoreService } from '../HOC';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';


class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;

    booksRequested();

    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  };

  render() {
    const { books, loading } = this.props;

    if (loading) return <Spinner />;

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


const mapStateToProps = ({ books, loading }) => ({
  books,
  loading
});


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, { booksLoaded, booksRequested })
)(BookList);

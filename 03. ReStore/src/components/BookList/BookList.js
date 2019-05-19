import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';

import { fetchBooks } from '../../actions';

import { withBookstoreService } from '../HOC';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';


class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
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


const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

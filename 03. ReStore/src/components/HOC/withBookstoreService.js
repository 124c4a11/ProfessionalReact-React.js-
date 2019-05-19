import React from 'react';
import { BookstoreServiceConsumer } from '../BookstoreServiceContext';


export default () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapped {...props} bookstoreService={ bookstoreService } />
            );
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

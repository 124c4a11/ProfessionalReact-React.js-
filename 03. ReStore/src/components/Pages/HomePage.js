import React, { Fragment } from 'react';

import BookList from '../BookList';
import ShopintCartTable from '../ShopingCardTable';


export default () => {
  return(
    <Fragment>
      <BookList />
      <ShopintCartTable />
    </Fragment>
  );
};

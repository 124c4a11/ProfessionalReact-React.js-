import React from 'react';


export default ({ numberItems, total }) => {
  return (
    <header className="bg-light py-3 mb-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <a href="/" className="navbar-brand text-dark ml-3">ReStore</a>
          <a href="/" className="text-dark mr-3">
            <span className="fa fa-shopping-cart mr-2 text-info"></span>
            { numberItems } items (${ total })
          </a>
        </div>
      </div>
    </header>
  );
};

import React from 'react';


export default ({ left, right }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        { left }
      </div>
      <div className="col-md-6 mt-sm-4 mt-md-0">
        { right }
      </div>
    </div>
  );
};

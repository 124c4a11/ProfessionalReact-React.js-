import React from 'react';

import { SwapiServiceConsumer } from '../swapiServiceContext';


export default (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            return (
              <Wrapped { ...props } swapiService={ swapiService } />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  };
};

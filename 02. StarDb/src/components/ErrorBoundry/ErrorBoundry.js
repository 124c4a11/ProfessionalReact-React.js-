import React, { Component } from 'react';

import ErrorIndicator from '../ErrorIndicator';


export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setsState({ hasError: true });
  };

  render() {
    if (this.state.hasError) return <ErrorIndicator />
    return this.props.children;
  }
};

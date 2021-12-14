import React from 'react';
import { render } from 'react-dom';
import App from './App';

function boot() {
  render(
    <App name={'React'}/>, document.querySelector('main')
  );
}

boot();

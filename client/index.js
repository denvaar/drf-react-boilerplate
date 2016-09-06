import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router browserHistory, hashHistory } from 'react-router';
import configureStore from './store/configureStore';


render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
);



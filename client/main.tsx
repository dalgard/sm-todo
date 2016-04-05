/// <reference path='../typings/main.d.ts'/>
declare var window: any;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IStore, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/components/App';
import rootReducer from './main/reducer';

const initialState = {};

const store: IStore<any> = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

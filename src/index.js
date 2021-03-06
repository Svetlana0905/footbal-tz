import 'antd/dist/antd.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { store } from './redux';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(

  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
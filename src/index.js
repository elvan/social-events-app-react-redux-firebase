import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import ScrollToTop from './app/layout/ScrollToTop';
import './app/layout/styles.css';
import { configureStore, history } from './app/store/configureStore';

const store = configureStore();

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <App />
      </ConnectedRouter>
    </Provider>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept('./app/layout/App', function () {
    setTimeout(render);
  });
}

render();

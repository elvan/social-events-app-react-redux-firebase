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
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

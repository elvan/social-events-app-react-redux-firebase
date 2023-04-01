import 'react-calendar/dist/Calendar.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import ScrollToTop from './app/layout/ScrollToTop';
import './app/layout/styles.css';
import { configureStore } from './app/store/configureStore';
import { loadEvents } from './features/events/eventActions';

const store = configureStore();

store.dispatch(loadEvents());

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
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

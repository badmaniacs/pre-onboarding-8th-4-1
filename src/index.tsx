import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './util/redux/index';
import App from './App';

const logger = createLogger();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

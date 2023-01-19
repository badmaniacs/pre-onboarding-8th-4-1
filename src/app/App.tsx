import { Provider } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from '../style/GlobalStyle';
import Main from '../pages/Main';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
};

export default App;

import '~/config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';

import FlashMessage from 'react-native-flash-message';

import store from './store';

import Home from './pages/Home';

const App = () => (
  <Provider store={store}>
    <Home />
    <FlashMessage position="top" />
  </Provider>
);

export default App;

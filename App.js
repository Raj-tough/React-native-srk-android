import * as React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/config/configStore';
import Root from './src/Root';
const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
export default App;

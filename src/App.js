import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Posts from './Posts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;

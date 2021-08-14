import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';

import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store= {store}>
      <div className="App">
        {/* <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <ItemContainer cake/>
        <ItemContainer/> */}
        <UserContainer/>
      </div>
    </Provider>

  );
}

export default App;

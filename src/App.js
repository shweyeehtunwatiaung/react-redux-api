import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import UserContainer from './components/UserContainer';
import { Signup } from './components/formik/Signup';

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <Signup />
          </div>
          <div className="col-md-7">
            {/* <UserContainer /> */}
          </div>
        </div>

        {/* <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <ItemContainer cake/>
        <ItemContainer/> */}

      </div>
    </Provider>

  );
}

export default App;

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';

import Home from './containers/home.jsx';
import AppStateHOC from './lib/app-state-hoc';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const WrappedApp = compose(
  AppStateHOC
)(App);

export default WrappedApp;


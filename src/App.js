import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBar from 'containers/navBar/NavBar';
import MainContent from 'containers/mainContent/MainContent';

import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app full-height">
        <div className="full-height left-nav-bar-container">
          <NavBar />
        </div>
        <div className="main-content full-height">
          <MainContent />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

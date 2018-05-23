import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'containers/header/Header';
import Dashboard from 'containers/dashboard/Dashboard.js';
import Cases from 'containers/cases/Cases.js';
import './MainContent.css';

const MainContent = () => (
  <div className="full-height">
    <Header />
    <Route path="/" exact component={Dashboard} />
    <Route path="/cases" exact component={Cases} />
  </div>
);

export default MainContent;

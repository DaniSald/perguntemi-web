import React from 'react';
import { Helmet } from 'react-helmet';
import Routes from './routes';

import './styles.css';

const title = 'Perguntemi';

const App = () => (
  <div className="App">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Routes />
  </div>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import QuoteApp from './src/components/QuoteApp';
import Start from './src/components/Start';
import './index.scss';
import {
  HashRouter,
  Route,
  } from 'react-router-dom';

const App = () => (
    <HashRouter>
      <div>
        <Route exact path='/' component={Start} />
        <Route path='/QuoteApp' component={QuoteApp} />
      </div>
    </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

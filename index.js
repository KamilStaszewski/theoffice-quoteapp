import React from 'react';
import ReactDOM from 'react-dom';
import QuoteApp from './src/components/QuoteApp';
import './index.scss'

const App = () => (
    <QuoteApp />
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

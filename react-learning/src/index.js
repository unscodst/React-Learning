import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseSyntax from './BaseSyntax/BaseSyntax';
import ListAndConditionals from './ListAndConditionals/ListAndConditionals';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BaseSyntax />, document.getElementById('base-syntax'));
ReactDOM.render(<ListAndConditionals />, document.getElementById('list-and-conditionals'));
registerServiceWorker();

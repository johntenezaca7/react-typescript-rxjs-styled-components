import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

ReactDOM.render(
  <App links={["home", "users", "messages"]}/>, 
  document.getElementById('root')
);



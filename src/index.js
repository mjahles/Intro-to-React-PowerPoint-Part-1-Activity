import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Offers from './Offers';
import Suggested from './Suggested';
import Task from './Task';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Offers />
    <Suggested />
    <Task />
  </React.StrictMode>,
  document.getElementById('offers'),
  document.getElementById('suggestions'),  //Make sure this id matches the section id in the corresponding js file. (it does here)
  document.getElementById('task')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

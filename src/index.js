import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import * as serviceWorker from './serviceWorker';
import Logo from './components/logo/logo';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Stats from './components/stats/stats';
import Topbar from './components/topbar/topbar';

ReactDOM.render(
  <React.StrictMode>
      <div class="grid-container">
      <Logo />
      <Navbar />
      <Main />
      <Topbar />
      <Stats />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'; // Changed import here
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devicon/devicon.min.css';
import 'animate.css';
import './index.css';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);

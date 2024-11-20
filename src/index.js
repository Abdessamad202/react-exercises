import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from './tp3/ex3/task';
import reportWebVitals from './reportWebVitals';
// import './index.css';
// import App from './App';
// import Header from './ex1/header'
// import Table from './ex2/table';
// import ListDR from './ex5/ListDR';
// import TableTache from './ex5/TableTache';
// import Info from './ex5/Info';
// import Products from './ex6/products';
// import List from './tp3/list';
// import Game from './tp3/ex2/game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Task />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './ex1/header'
import reportWebVitals from './reportWebVitals';
import Table from './ex2/table';
import ListDR from './ex5/ListDR';
import TableTache from './ex5/TableTache';
import Info from './ex5/Info';
import Products from './ex6/products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Table />
    <Info />
    <ListDR />
    <TableTache /> */}
    <Products />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

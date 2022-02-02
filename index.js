import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import {Provider} from "react-redux" /* 1 */
import store from "./redux/configStore"/* 2 */
ReactDOM.render(
  <Provider store={store}>{/* 3 */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>, /* 4 */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

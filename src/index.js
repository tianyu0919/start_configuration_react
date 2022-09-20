/*
 * @Author: 归宿
 * @Date: 2021-12-17 15:04:29
 * @Description:
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';
// import '@ies/semi-ui-react/dist/css/'

import App from './App.tsx';

const root = createRoot(document.querySelector('#router-view'));

root.render(<App />);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector('#root')
// );

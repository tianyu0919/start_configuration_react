import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import routerItems, { routesProps } from './router.js';

import A from './pages/useRequest';

export default function AHooks() {
  return (
    <BrowserRouter>
      <div>
        <h2>关于ahooks的例子</h2>
        <Routes>
          {/* {routerItems.map((v: routesProps, i: number) => {
            <Route key={i} path={v.path} element={v.page} />
          })} */}
          <Route path='/' element={<A />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

import React, { useEffect } from 'react';
import { HashRouter, useRoutes, useNavigate } from 'react-router-dom';
import routerItems from './router';
import { Button } from 'antd';

// import A from './pages/useRequest';

function AHooks() {
  return (
    <HashRouter>
      <Content />
    </HashRouter>
  )
}

function Content() {
  const navigate = useNavigate();
  const elements = useRoutes(routerItems);
  console.log(elements)

  useEffect(() => {
    // console.log(routerItems)
  }, [])

  return (
    <div>
      <h2>关于ahooks的例子</h2>
      {['/', '/home', '/about'].map((v, i) => <Button key={i} onClick={() => navigate(v)}>跳转到{v}</Button>)}
      {elements}
      {/* <Routes> */}
      {/* {routerItems.map((v: routesProps, i: number) => {
          <Route key={i} path={v.path} element={v.page}></Route>
        })} */}
      {/* <Route path='/' element={<div>首页</div>} /> */}
      {/* <Route path='*' element={<div>not found</div>} /> */}
      {/* <Route path='/' element={<A />} />
        <Route path='/home' element={<div>home</div>} />
        <Route path='/about' element={<div>about</div>} /> */}
      {/* </Routes> */}
    </div>
  )
}

export default AHooks;
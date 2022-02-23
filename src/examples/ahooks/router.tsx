import React from 'react';
import { RouteObject } from 'react-router-dom';
interface routesProps {
  path: string;
  page: any;
}

function GetElement(props: { src: string }) {
  const { src } = props;
  // let a = (async () => import(`./pages/${src}`))();
  let a = <div>xx</div>
  console.log(src)
  console.log(a);
  return <div>xx</div>
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <GetElement src='useRequest' />,
  },
  {
    path: '/about',
    element: () => import('./pages/about'),
  }
]


// (async () => {
// console.log(await import(`./pages/useRequest`))
// })()

// const routes: routesProps[] = [
//   { path: '/', page: () => import(`./pages/useRequest`) },
//   { path: '/about', page: () => import(`./pages/about`) },
//   { path: '*', page: <div>not found</div> },
// ];

export default routes;

export { routesProps } 

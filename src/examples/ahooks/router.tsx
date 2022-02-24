import React from 'react';
import { RouteObject } from 'react-router-dom';
interface routesProps {
  path: string;
  page: any;
}

function GetElement(props: { src: string }): any {
  console.log(props);
  const { src } = props;
  return new Promise(async (res) => {
    let data = await import(`./pages/${src}`);
    if (data.default) {
      console.log(data.default);
      // res(data.default);

      // res(React.createElement(data.default));
      res(<div>111</div>)
    }
    res(<div>没有找到</div>)
  })
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
  },
  {
    path: '*',
    element: <div>not found</div>
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

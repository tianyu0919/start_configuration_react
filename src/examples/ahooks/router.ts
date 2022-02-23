import { ReactChild } from 'react';

interface routesProps {
  path: string;
  page: Promise<ReactChild>;
}

const routes: routesProps[] = [
  // { path: '/', page: import(`./pages/useRequest`) }
];

export default routes;

export { routesProps } 

import { Outlet } from 'react-router-dom';

import { LayoutContainer } from './styles';

function DefaultLayout() {
  return (
    <LayoutContainer>
      <h1>Header</h1>
      <Outlet />
    </LayoutContainer>
  );
}

export { DefaultLayout };

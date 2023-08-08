import { Suspense } from 'react';
import './layout.scss';
import { Outlet } from 'react-router-dom';
import Loader from 'components/loader/Loader';

const Layout = () => {
  return (
    <div className="layout">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

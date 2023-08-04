import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Home from 'pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Welcome from 'pages/welcome/Welcome';
import Auth from 'pages/auth/Auth';
import LoginForm from './LoginForm/LoginForm';
// import RegisterForm from './RegisterForm/RegisterForm';
import NotFound from 'pages/notFound/NotFound';
import ScreensPage from './ScreensPage/ScreensPage';
import { PrivateRoute } from 'helpers/PrivateRoute';
import { RestrictedRoute } from 'helpers/RestrictedRoute';
import { getCurrentUser } from 'redux/auth/auth-operation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        // loader: Loader,
        children: [
          {
            path: '/',
            element: (
              <PrivateRoute redirectTo="/welcome" component={<Home />} />
            ),
            children: [
              {
                path: '/:boardName',
                element: <ScreensPage />,
              },
            ],
          },
          {
            path: '/welcome',
            element: <RestrictedRoute redirectTo="/" component={<Welcome />} />,
          },
          {
            path: '/auth',
            element: <RestrictedRoute redirectTo="/" component={<Auth />} />,
            children: [
              {
                path: '/auth/:id',
                element: (
                  <RestrictedRoute redirectTo="/" component={<LoginForm />} />
                ),
                // element: <LoginForm />,
                // loader: Loader,
              },
              // {
              //   path: '/auth/:id',
              //   element: (
              //     <RestrictedRoute
              //       redirectTo="/"
              //       component={<RegisterForm />}
              //     />
              //   ),
              //   // element: <Register />,
              //   // loader: Loader,
              // },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
    {
      basename: '/project-magic-task-manager',
    }
  );

  return <RouterProvider router={router} />;
};

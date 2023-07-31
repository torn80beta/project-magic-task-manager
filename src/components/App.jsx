import Home from 'pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Welcome from 'pages/welcome/Welcome';
import Auth from 'pages/auth/Auth';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import NotFound from 'pages/notFound/NotFound';

export const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        // loader: Loader,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/welcome',
            element: <Welcome />,
          },
          {
            path: '/auth',
            element: <Auth />,
            children: [
              {
                path: '/auth/login',
                element: <LoginForm />,
              },
              {
                path: '/auth/register',
                element: <RegisterForm />,
              },
            ],
          },
          // {
          //   path: '/login',
          //   element: (
          //     <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          //   ),
          //   // element: <Login />,
          //   // loader: teamLoader,
          // },
          // {
          //   path: '/register',
          //   element: (
          //     <RestrictedRoute
          //       redirectTo="/registrationSuccess"
          //       component={<Register />}
          //     />
          //   ),
          //   // element: <Register />,
          //   // loader: teamLoader,
          // },
          // {
          //   path: '/contacts',
          //   element: (
          //     <PrivateRoute redirectTo="/login" component={<Contacts />} />
          //   ),
          //   // loader: teamLoader,
          // },
          // {
          //   path: '/registrationSuccess',
          //   element: <RegistrationSuccess />,
          //   // loader: teamLoader,
          // },
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

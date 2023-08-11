import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {' '}
      <GoogleOAuthProvider clientId="47904579364-ra9747ai1bjo1orftnrukig7cia7b8o8.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>

  // </React.StrictMode>
);

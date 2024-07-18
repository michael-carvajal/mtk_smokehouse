
  import React from 'react';
import { createRoot } from 'react-dom/client';

  import { BrowserRouter } from 'react-router-dom';
  import { Provider } from 'react-redux';
  import './index.css';
  import App from './App';
  import configureStore from './store';
  import { restoreCSRF, csrfFetch } from './store/csrf';
  import ModalProvider from './context/Modal.js'

  const store = configureStore();

  if (process.env.NODE_ENV !== 'production') {
    restoreCSRF();

    window.csrfFetch = csrfFetch;
    window.store = store;
  }

  function Root() {
    return (
      <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ModalProvider>
    );
  }
  const domNode = document.getElementById('root');

  const root = createRoot(domNode);
  root.render(<Root />)
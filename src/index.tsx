import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './app/App';
import { Provider} from "react-redux";
import {store} from "./app/store/store";
import * as serviceWorker from "./serviceWorker";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

serviceWorker.unregister();

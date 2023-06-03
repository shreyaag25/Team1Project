import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import Reducer from './Componenets/Reducer';
import {PersistGate} from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

const store = createStore(Reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store);
const reload=()=>root.render(
  <React.StrictMode>
     <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App  store={store}/>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
reload();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

store.subscribe(reload);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './reduxtoolkit/store.js'
import FirebaseCrudExample from './FirebaseCrudExample.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  // <App />
  <FirebaseCrudExample />
  // </Provider>
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Fonts should be added to this file
import './css/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

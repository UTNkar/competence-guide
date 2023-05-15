import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Fonts should be added to this file
import './css/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// //For PieChart in Slider component
// import '@fortawesome/fontawesome-free/css/all.min.css';  
// import 'bootstrap-css-only/css/bootstrap.min.css';  
// import 'mdbreact/dist/css/mdb.css';
// import "chart.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

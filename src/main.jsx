import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './Pages/App/index.jsx'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://fakestoreapi.com/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

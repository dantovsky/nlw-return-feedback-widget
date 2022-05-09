import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './global.css' // O Vite vai lidar com as importações de CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

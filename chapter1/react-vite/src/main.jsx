import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hello from './Hello.jsx'

ReactDOM.createRoot(document.getElementById('rootA')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('rootB')).render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
)
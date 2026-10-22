import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Default-import form on purpose: React 19 ships CommonJS only, and Vite's
// dev-time named-export interop resolves `{ createRoot }` to undefined, which
// leaves the page blank. Reading off the default export works in dev and build.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

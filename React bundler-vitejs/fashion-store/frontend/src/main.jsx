import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

import './styles/style.css'
import 'bootstrap'

ReactDOM.createRoot(document.getElementsByClassName('root')[0]).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

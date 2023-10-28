import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NewsPriovider } from './Context/NewsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<NewsPriovider>
  <App/>
</NewsPriovider>
  </React.StrictMode>,
)

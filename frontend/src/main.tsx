import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import './global.css'
import Footer from './components/Footer.tsx'
import { BrowserRouter as Router } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router> 
      <Header />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
)

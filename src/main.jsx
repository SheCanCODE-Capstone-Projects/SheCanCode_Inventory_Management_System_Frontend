import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import User from '../src/components/User.jsx'

// import Dash1 from './components/Dash1.jsx';
// import Dash2 from './components/Dash2.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Finance from './components/Finance.jsx'
import Dashboard from './components/Dashboard.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
       <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>  
          <Route path="/Home" element={<Dashboard/>}/>
          <Route path="/User" element={<User/>}/>
          <Route path="/Finance" element={<Finance/>}/>
       </Routes>
      </Router>
  </React.StrictMode>
)

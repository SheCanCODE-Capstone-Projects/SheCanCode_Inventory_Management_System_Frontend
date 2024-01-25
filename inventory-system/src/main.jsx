import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import User from './Pages/User.jsx'

// import Dash1 from './components/Dash1.jsx';
// import Dash2 from './components/Dash2.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Finance from './Pages/Finance.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Operations from './Pages/Operations.jsx'
import Report from './Pages/report.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
       <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>  
          <Route path="/Home" element={<Dashboard/>}/>
          <Route path="/User" element={<User/>}/>
          <Route path="/Report" element={<Report/>}/>
          <Route path="/Finance" element={<Finance/>}/>
          <Route path="/Operations" element={<Operations/>}/>
       
       </Routes>
      </Router>
  </React.StrictMode>
)

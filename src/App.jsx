import { Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Donate from './Pages/Donate'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Rescue from './Pages/Rescue'
import Report from './Pages/Report'
import Adoption from './Pages/Adoption'
import AdminDashboard from './Pages/AdminDashboard'
import UserDashboard from './Pages/UserDashboard'
function App() {
  

  return (
    <>
     <Header/>
     {/* setup path */}
     <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='donate' element={<Donate/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='rescue' element={<Rescue/>}/>
      <Route path='report' element={<Report/>}/>
      <Route path='adoption' element={<Adoption/>}/>
<Route path='AdminDashboard' element={<AdminDashboard/>}/>
<Route path='UserDashboard' element={<UserDashboard/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Home from '../components/Home/Home'
import Contacts from '../components/Contact/Contact'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Sessions from '../Pages/Sessions/Sessions'
import SessionsDetails from '../Pages/Sessions/SessionsDetails'
import {Routes, Route} from 'react-router-dom';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sessions/' element={<Sessions/>}/>
        <Route path='/sessionsdetails' element={<SessionsDetails/>}/>
    </Routes>
  )
}

export default Routers
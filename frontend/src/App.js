import './App.css'
import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home'
import Logout from './Logout'
import Login from './Login'
import Reg from './Reg'
import Add from './Add'
import Nav from './Nav'
import Ct from './Ct'
import Allpost from './subroutes/Allpost'
import Education from './subroutes/Education'
import Mypost from './subroutes/Mypost'
import Sports from './subroutes/Sports'
import Movies from './subroutes/Movies'
import News from './subroutes/News'
import Edit from './Edit'
import WishList from './subroutes/WishList'
import Profile from './Profile'
import Forgot from './Forgot'

const App = () => {

  let [data,setData]=useState({"token":"","name":"","_id":""})
  let setLogin=(Udata)=>{
    setData({...data,...Udata})
  }
  let obj={"data":data,"setLogin":setLogin}
  return (<div className='main'>
    <BrowserRouter >
    <Ct.Provider value={obj}>
    {data.token!=""&&<Nav/>}
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/" element={<Allpost/>}/>
      <Route path="/mov" element={<Movies/>}/>
      <Route path="/edu" element={<Education/>}/>
      <Route path="/mypost" element={<Mypost/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/wishList" element={<WishList/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/logout" element={<Logout/>} />
      <Route path="/reg" element={<Reg/>}/>
      <Route path='/addPost' element={<Add/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
    </div>
  )
}

export default App
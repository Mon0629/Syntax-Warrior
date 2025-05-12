import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import Leaderboard from './pages/Leaderboard'
import PlayerProfile from './pages/PlayerProfile'
import Login from './pages/Login'
import Register from './pages/CreateAccount'
import SelectGameMode from './pages/SelectGameMode'
import MultiplayerMode from './pages/MultiplayerMode'
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/leaderboard' element={<Leaderboard/>}></Route>
        <Route path='/player/:id' element={<PlayerProfile/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/select-game-mode' element={<SelectGameMode/>}></Route>
        <Route path='/multiplayer-mode' element={<MultiplayerMode/>}></Route>
      </Routes>
    </BrowserRouter>
  )
 
}

export default App

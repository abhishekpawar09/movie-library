import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import WatchlistPage from './pages/Watchlist'

export default function App(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <nav className="flex gap-6 mb-8 border-b border-slate-800 pb-4 items-center">
        <h1 className="text-xl font-bold text-orange-300 ">Movie Library</h1>
        <div className="flex-1"></div>
        
        <NavLink to="/" className={({isActive}) => isActive ? 'text-yellow-400 font-medium' : 'text-slate-300'}>Browse</NavLink>
        <NavLink to="/watchlist" className={({isActive}) => isActive ? 'text-yellow-400 font-medium' : 'text-slate-300'}>Watchlist</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </div>
  )
}

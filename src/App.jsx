import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Expense from './pages/Expense'
import Debt from './pages/Debt'
import Credit from './pages/Credit'
import Payments from './pages/Payments'
import Gifts from './pages/Gifts'
import Reports from './pages/Reports'
import Profile from './pages/Profile'
import './App.css'

function App() {

  return (
    <div>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/debt" element={<Debt />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
         </Routes>
    </div>
  )
}

export default App

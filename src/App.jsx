import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toolbar } from '@mui/material'
import './App.css'

// Componentes
import AppBar from './components/AppBar'
import Footer from './components/Footer'

// Vistas
import Login from './views/Login'
import Home from './views/Home'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState('')

  const login = (userData) => {
    setUser(userData)
    setIsLogin(true)
  }

  const logout = () => {
    setUser('')
    setIsLogin(false)
  }

  return (
    <BrowserRouter>
      <div className="app">
        {isLogin ? (
          <>
            <AppBar user={user} logout={logout} />
            <Toolbar /> {/* Añade espacio igual a la altura del AppBar */}
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/home" element={<Home user={user} />} />
              </Routes>
            </main>
            <Footer />
          </>
        ) : (
          <Login login={login} />
        )}
      </div>
    </BrowserRouter>
  )
}

export default App

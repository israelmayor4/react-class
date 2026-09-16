// src/App.jsx
import { Routes, Route } from 'react-router-dom'
// import { Navbar } from './Component/Navbar'
// import { Sidebar } from './Component/sideBar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Profile } from './pages/Profile'
import { Dashboard } from './pages/Dashboard'
import { Settings } from './pages/settings'
import { Login } from "./pages/Login";
import { Logs } from './pages/Logs';
import {ProductPage} from "./pages/ProductPage"
import { FullProduct } from './pages/FullProduct'
import SqiPage from "./Sqi"
import './App.css'

export const App = () => {
  return (
    <div style={{display: 'flex', columnGap: "20px",}}>
      {/* Fixed Sidebar on every screen */}
      {/* <Sidebar /> */}

      {/* Switches pages cleanly without content bleeding into other tabs */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<FullProduct />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/design" element={<SqiPage />} />


        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile/:name/:age" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logs" element={<Logs />} />
        </Route>

      </Routes>
    </div>
  )
}

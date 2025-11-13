import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import {Toaster} from 'sonner'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import CollectionPage from "./pages/CollectionPage"

function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/collection/:collection" element={<CollectionPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

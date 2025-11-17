import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import {Toaster} from 'sonner'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import CollectionPage from "./pages/CollectionPage"
import ProductDetails from "./components/Products/ProductDetails"
import CheckOut from "./components/Cart/CheckOut"
import OrderConfirmation from "./pages/OrderConfirmation"

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
          <Route path="product/:id" element={<ProductDetails />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
          <Route path="/order-confirmation" element={<OrderConfirmation />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

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
import OrderDetailsPage from "./pages/OrderDetailsPage"
import MyOrders from "./pages/MyOrders"
import AdminLayout from "./components/Admin/AdminLayout"
import UserAdmin from "./components/Admin/UserAdmin"
import ProductAdmin from "./components/Admin/ProductAdmin"
import OrderAdmin from "./components/Admin/OrderAdmin"
import AdminDashboard from "./components/Admin/AdminDashboard"

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
          <Route path="/order/:id" element={<OrderDetailsPage />}></Route>
          <Route path="/my-orders" element={<MyOrders />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="users" element={<UserAdmin />}></Route>
          <Route path="products" element={<ProductAdmin />}></Route>
          <Route path="products/:id" element={<ProductAdmin />}></Route>
          <Route path="orders/:id" element={<OrderAdmin />}></Route>
          <Route path="orders" element={<OrderAdmin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

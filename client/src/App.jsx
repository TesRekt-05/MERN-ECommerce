import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/ui/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminLayout from "./components/admin-view/layout";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import Shoppinglayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component
      <h1>Header component</h1> */}
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="Register" element={<AuthRegister />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        <Route path='/shop' element={<Shoppinglayout/>}></Route>
        
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  )
}
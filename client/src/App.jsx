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
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useSelector } from "react-redux";

export default function App() {

  const {user,isAuthenticated} = useSelector(state =>state.auth)


  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component
      <h1>Header component</h1> */}
      <Routes>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated}
                      user={user}>
            <AuthLayout />
          </CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path='/admin' element={<CheckAuth isAuthenticated={isAuthenticated}
                      user={user}>
          <AdminLayout />
        </CheckAuth>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        <Route path='/shop' element={<CheckAuth isAuthenticated={isAuthenticated}
                      user={user}>
          <Shoppinglayout />
        </CheckAuth>}>

          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />


        </Route>
        <Route path="/unauth-page" element={<UnauthPage/>} />
        <Route path="*" element={<NotFound />} />
         

      </Routes>
    </div>
  )
}
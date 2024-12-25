
import { BrowserRouter, Routes, Route } from "react-router";
import { UserProvider } from "./userContext";
import CartProvider from "./CartContext";
import Homepage from "./pages/Homepage"
import Navbar from "./Components/Navbar"
import Loginpage from "./pages/Loginpage"
import Cartpage from "./pages/Cartpage";
import Signupage from "./pages/Signupage";
import Orderspage from "./pages/Orderspage";
function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider> {/* Wrap Navbar with the provider */}
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="login" element={<Loginpage />} />
              <Route path="cart" element={<Cartpage />} />
              <Route path="signup" element={<Signupage />} />
              <Route path="orders" element={<Orderspage />} />
            </Routes>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App

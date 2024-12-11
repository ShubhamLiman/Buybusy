
import { BrowserRouter, Routes, Route } from "react-router";

import Homepage from "./pages/Homepage"
import Navbar from "./Components/Navbar"
import Loginpage from "./pages/Loginpage"

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<Loginpage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

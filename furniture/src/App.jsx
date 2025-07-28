import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Mattress from "./pages/Mattress"
import Bedframes from "./pages/Bedframes"
import Boxspring from "./pages/Boxspring"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MattressWholeDetails from "./components/MattressWholeDetails"
import Cart from "./pages/Cart"


function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mattress" element={<Mattress/>}/>
        <Route path="/mattress/:name" element={<MattressWholeDetails/>}/>
        <Route path="/bedframes" element={<Bedframes/>}/>
        <Route path="/boxspring" element={<Boxspring/>}/>
        {/* <Route path="/cart" element={<Cart/>}/> */}

      </Routes>
      <Footer/>
    </>
  )
}

export default App

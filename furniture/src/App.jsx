import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Mattress from "./pages/Mattress"
import Bedframes from "./pages/Bedframes"
import Boxspring from "./pages/Boxspring"
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mattress" element={<Mattress/>}/>
        <Route path="/bedframes" element={<Bedframes/>}/>
        <Route path="/boxspring" element={<Boxspring/>}/>

      </Routes>
    </>
  )
}

export default App

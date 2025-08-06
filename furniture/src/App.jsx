import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mattress from "./pages/Mattress";
import Bedframes from "./pages/Bedframes";
import Boxspring from "./pages/Boxspring";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MattressWholeDetails from "./components/MattressWholeDetails";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import BedWholeDetails from "./components/BedWholeDetails";
import BoxWholeDetails from "./components/BoxWholeDetails";
import Information from "./pages/CompanyInformation";
import CustomerService from "./pages/CustomerService";
import CompanyInformation from "./pages/CompanyInformation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mattress" element={<Mattress />} />
        <Route path="/mattress/:name" element={<MattressWholeDetails />} />
        <Route path="/bedframes" element={<Bedframes />} />
        <Route path="/bedframes/:name" element={<BedWholeDetails />} />
        <Route path="/boxspring" element={<Boxspring />} />
        <Route path="/boxspring/:name" element={<BoxWholeDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/info" element={<CompanyInformation />} />
        <Route path="/cusservice" element={<CustomerService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

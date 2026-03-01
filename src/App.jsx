import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Activities from "./components/Activities"; 
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import PlanTour from "./pages/PlanTour"; 
import Hotels from "./pages/Hotels";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package/:id" element={<PackageDetails />} />
        <Route path="/plan" element={<PlanTour />} />
        <Route path="/plan-tour" element={<PlanTour />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:area" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

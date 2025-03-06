import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AppLayout from "./components/AppLayout";
import "./App.css";
import Rooms from "./pages/Rooms";
import RoomsDetail from "./components/RoomsDetail";
import { useEffect } from "react";
import ChatIcon from "./Helpers/ChatIcon";
import TC from "./components/Policies/TC";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import Lahore from "./pages/Lahore";
import MLJ from "./pages/MLJ";
import Loyalty from "./pages/Loyalty";
import Offers from "./pages/Offers";
import Blogs from "./pages/Blogs";
import { Toaster } from "react-hot-toast";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <ScrollToTop />
      <ChatIcon />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          
          <Route path="Lahore" element={<Lahore />} />
          <Route path="MLJ" element={<MLJ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="loyalty" element={<Loyalty />} />
          <Route path="offers" element={<Offers />} />
          <Route path="Blog" element={<Blogs />} />

          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TC />} />
          <Route path="rooms/:id" element={<RoomsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

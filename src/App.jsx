import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AppLayout from "./components/AppLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

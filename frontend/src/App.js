import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Therapy from "@/pages/Therapy";
import Corporate from "@/pages/Corporate";
import Workshops from "@/pages/Workshops";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll />
      <div className="min-h-screen bg-offwhite font-sans text-forest flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/individual-therapy" element={<Therapy />} />
            <Route path="/corporate-wellbeing" element={<Corporate />} />
            <Route path="/workshops-events" element={<Workshops />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/journal" element={<Navigate to="/" replace />} />
            <Route path="/support" element={<Navigate to="/individual-therapy" replace />} />
            <Route path="/corporate-workshops" element={<Navigate to="/corporate-wellbeing" replace />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;

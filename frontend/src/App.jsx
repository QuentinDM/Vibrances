import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              fontSize: "15px",
              padding: "12px 16px",
              borderRadius: "12px",
              background: "var(--bordeaux)",
              color: "#fff",
            },
            error: {
              style: {
                border: "1px solid var(--bordeaux)",
              },
            },
            success: {
              style: {
                border: "1px solid #22c55e",
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/confidentialite" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

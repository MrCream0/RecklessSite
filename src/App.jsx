import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  About, Contact, Staff, Feedbacks, Hero, Navbar,
  Socials, Works, StarsCanvas, Footer, Rules, AppForm, AdminWindow, LoginForm, ProtectedRoute
} from "./components";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsAuthenticated(true);
    }

    const handleWindowBeforeUnload = (event) => {
      // Clear token from memory and local storage before the window is unloaded
      localStorage.removeItem("jwtToken");
    };

    window.addEventListener("beforeunload", handleWindowBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleWindowBeforeUnload);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover
      bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Socials />
        <About />
        <Staff />
        <Rules />
        {/* Partners */}
        <Feedbacks />
        <div className="realitve z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <AppForm />
        <nav>
          <div className="flex items-center justify-center absolute w-full h-[250px] flex-col">
            <button onClick={toggleLoginForm} className="px-6 py-3 bg-indigo-500 text-white rounded-md shadow-lg hover:bg-indigo-600">
              Admin Login
            </button>
            {showLoginForm && <LoginForm />}
          </div>
        </nav>
        <Footer />
        <Routes>
          {!isAuthenticated ? (
            <Route path="/admin" element={<AdminWindow />} />
          ) : (
            <Route path="/admin" element={<Navigate to="/#home" replace />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
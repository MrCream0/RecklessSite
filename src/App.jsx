import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  About, Contact, Staff, Feedbacks, Hero, Navbar,
  Socials, Works, StarsCanvas, Footer, Rules, AppForm, AdminWindow, LoginForm
} from "./components";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover
      bg-no-repeat bg-center">
          <Navbar />
          {/*<Hero />*/}
          <About />
        </div>
        <Socials />
        {/*<About />*/}
        <Staff />
        <Rules />
        {/* Partners */}
        <Feedbacks />
        <div className="realitve z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/* login button
        <nav>
          <div className="flex items-center justify-center absolute w-full h-[250px]">
            <button onClick={toggleLoginForm} className="px-6 py-3 bg-indigo-500 text-white rounded-md shadow-lg hover:bg-indigo-600">
              Admin Login
            </button>
            {showLoginForm && <LoginForm />}
          </div>
        </nav>
  */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

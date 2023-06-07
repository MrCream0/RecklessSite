import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About, Contact, Staff, Feedbacks, Hero, Navbar,
  Socials, Works, StarsCanvas, Footer, Rules, AppForm, AdminWindow, LoginForm
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={LoginForm} />
        <Route path="/admin" component={AdminWindow} />
      </Routes>
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
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

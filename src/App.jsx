import { BrowserRouter } from "react-router-dom";
import { About, Contact, Staff, Feedbacks, Hero, Navbar, 
  Socials, Works, StarsCanvas} from "./components";

const App = () => {
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
      <Works />
      <Feedbacks />
      <div className="realitve z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App

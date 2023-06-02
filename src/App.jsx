import { BrowserRouter } from "react-router-dom";
import { About, Contact, Staff, Feedbacks, Hero, Navbar, 
  Socials, Works, StarsCanvas, Footer, Rules} from "./components";

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
      <Rules />
      <Works />
      <Feedbacks />
      <div className="realitve z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App

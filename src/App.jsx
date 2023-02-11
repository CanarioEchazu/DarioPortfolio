import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Hire from "./components/hire";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Testimonials from "./components/testimonials";


const App = () => {
  return (
    <div>
      <div className="bg-hero bg-contain bg-center bg-no-repeat md:bg-cover">
        <div className="mx-auto max-w-7xl">
          <Navbar/>
          <Hero/>
        </div>
      </div>
      <About/>
      <Services/>
      <Testimonials/>
      <Hire/>
      <Contact/>
    </div>
  );
};

export default App;
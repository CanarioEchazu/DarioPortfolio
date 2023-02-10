import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <div className="bg-hero bg-contain bg-center bg-no-repeat md:bg-cover">
        <div className="mx-auto max-w-7xl">
          <Navbar/>
          <Hero/>
        </div>
      </div>
    </div>
  );
};

export default App;
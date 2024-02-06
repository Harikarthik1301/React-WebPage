import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/work';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Home />
    <About />
    <Work />
    <Reviews />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer';
import Happen from './components/Happen';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';
import NewListings from './components/NewListings';
import News from './components/News';
import Recommendations from './components/Recommendations';
import Trends from './components/Trends';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* New Listings */}
      <NewListings />
      {/* Recommended Locations */}
      <Recommendations />
      {/* Happenings */}
      <Happen />
      {/* Trends */}
      <Trends />
      {/* News */}
      <News />
      {/*Info */}
      <Info />
      <Footer />
    </div>
  );
}

export default App;

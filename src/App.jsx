import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import './App.css';
import FlowerGrid from './components/FlowerGrid/FlowerGrid';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <FlowerGrid />
      <Footer />
    </div>
  );
}

export default App;

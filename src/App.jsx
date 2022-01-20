import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Flower from './components/Flower/Flower';
import './App.css';
import data from './data';

const flower = data.map( (ele, index) => {
  console.log(ele)
  return (
    <Flower 
      {...ele}
      key={index}
    />
  )
})


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className='flowerGrid'>
      {flower}
      </div>
      <Footer />
    </div>
  );
}

export default App;

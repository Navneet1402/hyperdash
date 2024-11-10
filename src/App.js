import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import LexoZ from './Components/LexoZ';
import AirX from './Components/AirX';
import AirX2 from './Components/AirX2';
import Specs from './Components/Specs';
import NumericalSpecs from './Components/NumericalSpecs';
import DesignSection from './Components/DesignSection';
import Footer from './Components/Footer';
import StoriesSection from './Components/StoriesSection';
import AirX3 from './Components/AirX3';


function App() {
  return (
    <>
    <Navbar/>
    <main className='main'>
      <Home/>
      <AirX/>
      <LexoZ/>
      <AirX2/>
      <Specs/>
      <NumericalSpecs/>
      <DesignSection/>
      <AirX3/>
      <StoriesSection/>
      <Footer/>
      

    </main>
    </>

  );
}

export default App;

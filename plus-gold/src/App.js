import './App.css';
import Navbar from './Components/Navbar2';
import SharkContainer from './Components/Navbar1';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <SharkContainer/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

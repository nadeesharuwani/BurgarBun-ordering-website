import './App.css'
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Component/Footer/Footer';
import Menu from './Pages/Menu/Menu';
import Form from './Component/Form/Form';
import AddCard from './Component/AddCard/AddCard';
import About from './Pages/About/About';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/menu' element={<Menu/>} />
          <Route exact path='/form' element={<Form/>} />
          <Route exact path='/addCard' element={<AddCard/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;

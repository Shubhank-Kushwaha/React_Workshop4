
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Header from './Components/Header';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/Contact' element= {<Contact/>}/>
        <Route path='/About' element= {<About/>}/>
        <Route path='*' element= {<NotFound/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

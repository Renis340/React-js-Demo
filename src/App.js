import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login/Login';
import Protected from './components/Protected/Protected';
import Register from './components/Register/Register';
import Videos from './components/Youtube/Videos';
import Shopping from './components/Shopping/Index';
import About from './components/About/About';

function App() {
  return (
   <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Protected  Cmp={Home} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/videos' element={<Protected Cmp={Videos} />} />
        <Route path='/shopping' element={<Protected Cmp={Shopping} />} />
        <Route path='/about' element={<Protected Cmp={About} />} />
      </Routes>
      <Footer  />
   </Router>
  );
}

export default App;

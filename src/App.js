import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Enotebook from './components/Enotebook';

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <div className=''>
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/" element={<Enotebook/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </Router>
    </NoteState>
    </>
  );
}

export default App;

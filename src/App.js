import './components/style.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NoteState from './context/NoteState';

function App() {
  return (
    <BrowserRouter>
    <NoteState >
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;

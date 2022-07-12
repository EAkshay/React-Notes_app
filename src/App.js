import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './components/nav';
import About from './components/about';
import Contact from './components/contact';
import Takenote from './components/takenote';
import { NoteContext } from './context/notecontext';
import {useState} from 'react'
import Arr from './components/arr';

function App() {
  const [initValue, setValue] = useState('');
  const [initarr, setArr] = useState([])
  
  const id = Math.floor(Math.random() * 10000) + 1;

  return (
    <Router>
      <Nav />
      <NoteContext.Provider value={{initValue , setValue ,initarr ,setArr , id}}>
        <Takenote />
        <Arr />
      </NoteContext.Provider>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;

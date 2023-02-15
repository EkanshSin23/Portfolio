import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Experience from './Experience/Experience';
import Work from './Work/Work';
import Contact from './Contact/Contact'
import LeftIcons from './Components/leftIcons/LeftIcons';
import RightIcons from './Components/rightIcons/RightIcons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  return (
    <>
      <LeftIcons />
      <RightIcons />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;

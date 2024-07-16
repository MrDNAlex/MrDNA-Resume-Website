import './App.css';
import AboutMe from './Components/AboutMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import About from "./components/About"
import Contacts from "./components/Contacts"
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <main className="App">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contacts />
   </main>
  );
}

export default App;

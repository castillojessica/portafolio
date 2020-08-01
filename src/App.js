import React from 'react';
import Header from './components/header/Header'
import About from './components/about me/About me';
import Contact from './components/contact/Contact';
import Biefcase from './components/briefcase/Briefcase'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header/>
        <About/>
        <Biefcase/> 
        <Contact/>        
        <Footer />
      </header>
    </div>
  );
}

export default App;

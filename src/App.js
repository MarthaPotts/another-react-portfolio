// import logo from './logo.svg';
import './App.css';
// import React, { useEffect, useState } from 'react';
import Projects from './ProjectData'; 
import Project from './components/ProjectComponent';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Nav from './components/Nav';
import About from './components/About'; 
import Contact from './components/Contact';   



// console.log(Projects);
function getProject(project) {
  return(
    <Project
    title={project.title}
    screenshot={project.screenshot}
    deployed={project.deployed}
    repo={project.repo}
    />
  ) 
}  
function App() {
 
  return (
    <div className="App">
     {/* <div>
       {Projects.map(getProject)}

     </div> */}
    <Header />
    
    <Nav />
    <About />
    {Projects.map(getProject)}
    
    <Contact/>
    <Footer />
    
    </div>
  );
}

export default App;

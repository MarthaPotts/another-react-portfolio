// import logo from './logo.svg';
import './App.css';
// import React, { useEffect, useState } from 'react';
import Projects from './ProjectData'; 
import Project from './components/ProjectComponent';

// function createProject(project) {
//   return(
//     <Project 
//     title={project.title}
//     deployed={project.deployed}
//     repo={project.repo}
//     screenshot={project.screenshot}
//     />
//   )
// }

console.log(Projects);
// console.log(Projects[0].id, Projects[0].title, Projects[0].deployed, Projects[0].repo);
Projects.map((title) =>{
  return title; 
});
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
     <div>
       {Projects.map(getProject)}
     </div>
    </div>
  );
}

export default App;

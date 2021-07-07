// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import  Projects from '../public/data'; 


function App() {
  // function getData() {
  //   fetch('data.json', {
  //     headers: {
  //       "Content-Type": "application/json", 
  //       "Accept": 'application/json'
  //     }
  //   })
  //   .then( (res) => {
  //     console.log(res); 
  //     return res.json();
  //     })
  //     .then( (myData) => {
  //       console.log(myData);
  //       setData(myData);  
  //     })
  //     .catch((err) => console.log(err)); 
  // };

  // useEffect(()=> {
  //   getData()
  // }, []);

  // const [data, setData] = useState([]);
  // console.log(data);
  // data.map(getTitle);

  // function getTitle(item) {
  //   return [item.title]; 
  // }
  function createProject(project) {
    return(
      <Project 
      title={project}
    )
  }

  return (
    <div className="App">
      {/* {
        data && data.length > 0 && data.map( (item) => {
           return <p>{item.title}</p>
          
        }) 
      } */}
      function 


    </div>
  );
}

export default App;

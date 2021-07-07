// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  function getData() {
    fetch('data.json', {
      heaers: {
        "Content-Type": "application/json", 
        "Accept": 'application/json'
      }
    })
    .then( (res) => {
      console.log(res); 
      return res.json();
      })
      .then( (myData) => {
        console.log(myData); 
      })
      .catch((err) => console.log(err)); 
  };

  useEffect(()=> {
    getData()
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;

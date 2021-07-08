import React from 'react';
import './styles/projectcomp.css';  

function Project(props) {
    return( 
    <div className="card-container">
        <div className="title">
            <h2 className="title">{props.title}</h2>
        </div>
        <div className='screenshot' >
           <img src={props.screenshot} alt="screenshot"/>
        </div>
        <div className="links">
           <h3 className="deplink"><a href={props.deployed}>Deployment</a></h3>
            <h3 className="repolink"><a href={props.repo}>Repo</a></h3>
            </div>   
         </div>
    )}; 

    export default Project; 


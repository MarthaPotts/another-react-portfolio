import React from 'react'; 

function Project(props) {
    return( <div className="card">
        <div className="top">
            <h2 className="title">{props.title}</h2>
        </div>
        <div className="links">
            <h3 className="deplink">{props.deployed}</h3>
            <h3 className="repolink">{props.repo}</h3>
            </div>   
         </div>
    )}; 

    export default Project; 


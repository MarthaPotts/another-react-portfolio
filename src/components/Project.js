import React, { useState, useEffect } from 'react';

function Project() {
    //set initial state
    const [projects, setProjects] = useState({}); 
    const [projObject, setProjObject] = useState({
        title: "", 
        deploy_link: "" 
        repo_link: "", 
        screenshot: ""
    }); 
    useEffect( () => {
        loadProjects(); 
    }, {}); 

    function loadProjects() {
        
    }
}
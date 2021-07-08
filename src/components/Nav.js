import React from 'react';
import './styles/nav.css';  

function Nav(props) {
    return(
        <div className="nav-container">
            <ul className="list-parent">
              <a href="https://marthapotts.github.io/portfolio/bio.html"><li>About</li></a>
              <a href="https://github.com/MarthaPotts"><li>Work</li></a>
              <a href="/"><li>Contact</li></a>
              <a href="https://docs.google.com/document/d/1WOpf-27dleFeSgy0EAmsBAg6wA5SXUaSAzdNA4eqA1Q/edit?usp=sharing"><li>Resume</li></a>
            </ul>
        </div>
    ); 
}

export default Nav; 
import React from 'react';
import logo from '../../img/header/logo.png';

class Navigation extends React.Component {
    render(){
        return(
            <section>
                <nav className="menu">
                    <div className="content">
                        <img src={logo} alt="portfolio-logo"></img>
                        <ul>
                        <li><a href="javascript: void(0)">About</a></li>
                        <li><a href="javascript: void(0)">Skills</a></li>
                        <li><a href="javascript: void(0)">Work</a></li>
                        <li><a href="javascript: void(0)">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </section>
        )
    }
}

export default Navigation;
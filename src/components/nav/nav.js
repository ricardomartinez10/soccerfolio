import React from 'react';
import './navigation.scss';
import logo from '../../img/header/logo.png';

class Navigation extends React.Component {
    render(){
        return(
            <nav className="menu">
                <div className="content">
                    <img src={logo}></img>
                    <ul>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;
import React from 'react';
import profile from '../../img/about/design.png';

class About extends React.Component  {
    render() {
        return(
            <section className="home-section about">
                <div className="content">
                    <div className="title-container">
                        <h1>Interactive Media Designer - Front-end developer</h1>
                        <p>I enjoy to code and design creative projects</p>
                    </div>
                    <div className="profile-container">
                        <img src={profile} alt="profile"></img>
                        <h2>Ricky</h2>
                        <div className="dev-container">
                            <p>WEB DEVELOPER</p>
                        </div>
                    </div>
                    <div className="profile-text">
                        <p>Student of the ninth semester of Interactive Media Design at Icesi University with interest to work in areas of design, development and new technologies, with interest and experience in human computer interaction (HCI) projects, mobile design and development, prototyping and interactive installations.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;


import React from 'react';

class SoccerField extends React.Component {
    render(){
        return(
            <section className="home-section">
                 
                <div className="content field">
                <div>{this.props.children}</div>
                    <div className="penalty-area">
                        <div className="goal-area"></div>
                        <div className="penalty-arc"></div>
                        <div className="semi-circle"></div>
                    </div>
                    <div className="corner1"></div>
                    <div className="corner2"></div>
                    <div className="center-circle"></div>
                    <div className="center-line"></div>
                    <div className="kick-point"></div>
                    <div className="wrapper-area-opponent">
                        <div className="penalty-area opponent">
                            <div className="goal-area"></div>
                            <div className="penalty-arc"></div>
                            <div className="semi-circle"></div>
                        </div>    
                    </div>
                </div>
            </section>
        )
    }
}

export default SoccerField;
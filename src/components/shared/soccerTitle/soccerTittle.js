import React from 'react';

class SoccerTitle extends React.Component{
    render() {
        return(
            <div className="tittle-container">
                <h2>{this.props.name}</h2>
                <div className="grass-image"></div>
            </div>
        )
    }
}

export default SoccerTitle;
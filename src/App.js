import React from 'react';
import './main.scss';
import Navigation from './components/nav/nav'
import About from './components/about/about';
import SoccerField from './components/soccer-field/soccerField'
import Tecnologies from './components/tecnologies/tecnologies';


function App() {
  return (
    <div className="main-container">
      <Navigation></Navigation>
      <About></About>
      <SoccerField>
        <Tecnologies></Tecnologies>
      </SoccerField>
    </div>
  );
}

export default App;

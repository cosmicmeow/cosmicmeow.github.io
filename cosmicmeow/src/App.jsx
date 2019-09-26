import React from 'react';
import './App.scss';

class App extends React.Component {

  LandingSection = () => {
    return (<div id="landing" class="section-container hero-banner">
    <div id="landing-back" class="landing-container parallax-container">
      </div>
    <div id="landing-middle" class="landing-container parallax-container">
      </div>
    <div id="landing-front" class="landing-container">
      <div class="clouds"></div>
      <div class="hello"></div>
      <div class="bun"></div>
  </div>
    
  </div>)
  }
  render() {
    return (
      <div className="app-root">
        <this.LandingSection/>
      </div>
    );
  }
  
}

export default App;

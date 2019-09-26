import React from 'react';
import './App.scss';

class App extends React.Component {
	LandingSection = () => {
		return (
			<div id='landing' class='section-container hero-banner'>
				<div
					id='landing-back'
					class='landing-container parallax-container'
				></div>
				<div
					id='landing-middle'
					class='landing-container parallax-container'
				></div>
				<div id='landing-front' class='landing-container'>
					<div class='clouds'></div>
					<div class='hello'></div>
					<div class='bun'></div>
				</div>
			</div>
		);
  };

  ServicesSection = () => {
    return (
      <div class="section-container services">
      <ul class="services-items"> 
        <li id="services-web" class="services-item">
          <div class="services-image"></div>
          <div class="services-copy">I code!</div>
          <div class="services-subcopy">I currently code full time.<br/>Not available for freelance coding job atm.</div>
        </li>
        <li id="services-illustration" class="services-item">
          <div class="services-image"></div>
          <div class="services-copy">I also draw!</div>
          <div class="services-subcopy">Commission available!<br/><a href="mailto:cosmicmeow.works@gmail.com" target="_blank">Get in touch!</a></div>
        </li>
      </ul>
    </div>
    );
  }
  
	render() {
		return (
			<div className='app-root'>
				<this.LandingSection />
        <this.ServicesSection/>
			</div>
		);
	}
}

export default App;

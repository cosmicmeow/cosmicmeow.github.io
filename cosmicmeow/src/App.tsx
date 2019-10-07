import React from 'react';
import './App.scss';
import WebWorks from './WebWorks';

interface WorkItemType {
	key: string;
	image: string;
	title: string;
	subtitle: string;
	clients: string;
	tools: string;
	url: string;
}

interface HeaderItemType {
	icon: string;
	title: string;
	subtitle: string;
}

class App extends React.Component {
	LandingSection = () => {
		return (
			<div id='landing' className='section-container hero-banner'>
				<div
					id='landing-back'
					className='landing-container parallax-container'></div>
				<div
					id='landing-middle'
					className='landing-container parallax-container'></div>
				<div id='landing-front' className='landing-container'>
					<div className='clouds'></div>
					<div className='hello'></div>
					<div className='bun'></div>
				</div>
			</div>
		);
	};

	ServicesSection = () => {
		return (
			<div className='section-container services'>
				<ul className='services-items'>
					<li id='services-web' className='services-item'>
						<div className='services-image'></div>
						<div className='services-copy'>I code!</div>
						<div className='services-subcopy'>
							I currently code full time.
							<br />
							Not available for freelance coding job atm.
						</div>
					</li>
					<li id='services-illustration' className='services-item'>
						<div className='services-image'></div>
						<div className='services-copy'>I also draw!</div>
						<div className='services-subcopy'>
							Commission available!
							<br />
							<a
								href='mailto:cosmicmeow.works@gmail.com'
								target='_blank'>
								Get in touch!
							</a>
						</div>
					</li>
				</ul>
			</div>
		);
	};

	render() {
		return (
			<div className='app-root'>
				<this.LandingSection />
				<this.ServicesSection />
				<WebWorks />
			</div>
		);
	}
}

export default App;

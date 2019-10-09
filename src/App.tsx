import React from 'react';
import './App.scss';
import WebWorks from './WebWorks';
import Illustration from './Illustrations';
import SectionHeader from './SectionHeader';

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
				<Illustration />
				<this.AboutMe />
			</div>
		);
	}

	AboutMe = () => {
		const item = {
			icon: 'bun_about.png',
			title: 'About Lookmai',
			subtitle:
				'Lookmai is a freelance frontend developer and illustrator. She finished CS bachelor at Old Dominion University and is currently working at Anthem.',
		};

		const emailurl =
			'mailto:cosmicmeow.works@gmail.com?&subject=Hello%20There!&body=Your-inquiry-goes-here!';
		return (
			<div id='about' className='section-container'>
				<div className='page-container'>
					<SectionHeader item={item} />
					<h4 style={{ maxWidth: '430px', margin: 'auto' }}>
						I am currently available for illustration commissions
						and full time frontend development opportunity!
						<a
							className='inline-email-link'
							href={emailurl}
							target='_blank'>
							Get in touch!
						</a>
					</h4>
					<a
						href='https://www.linkedin.com/in/lookmai-rattana-23365966/'
						target='_blank'>
						<img
							className='lookmai-image'
							src={require('./assets/landing_assets/lookmai.png')}></img>
					</a>
					<div className='social-links-container'>
						<a
							href='https://twitter.com/cosmicmeoww'
							target='_blank'>
							<img
								className='social-link'
								src={require('./assets/landing_assets/icon_twitter.png')}></img>
						</a>
						<a
							href='https://instagram.com/cosmicmeowdraws'
							target='_blank'>
							<img
								className='social-link'
								src={require('./assets/landing_assets/icon_instagram.png')}></img>
						</a>

						<a href={emailurl} target='_blank'>
							<img
								className='social-link'
								src={require('./assets/landing_assets/icon_email.png')}></img>
						</a>
					</div>
				</div>
			</div>
		);
	};
}

export default App;

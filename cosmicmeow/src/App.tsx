import React from 'react';
import './App.scss';
import webItems from './data/webData';

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

	SectionHeader = ({ item }: { item: HeaderItemType }) => {
		const url = require(`./assets/header_assets/${item.icon}`);
		const iconObj = { backgroundImage: `url(${url})` };

		return (
			<div className='section-header'>
				<div className='header-icon' style={iconObj}></div>
				<div className='header-title'>{item.title}</div>
				<div className='header-subtitle'>{item.subtitle}</div>
			</div>
		);
	};

	WebWorksSection = () => {
		const item = {
			icon: 'bun_web.png',
			title: 'Front End Experience',
			subtitle:
				"I'm a frontend developer with experiences in modern JS frameworks like React and Vue. Here are some of my favorite works that I've created over the years.",
		};

		return (
			<div id='web-works' className='section-container'>
				<div className='page-container'>
					<this.SectionHeader item={item} />
					<div className='section-items'>
						{webItems.items.map(el => {
							return <this.WorkItem key={el.key} item={el} />;
						})}
					</div>
				</div>
			</div>
		);
	};

	WorkItem = ({ item }: { item: WorkItemType }) => {
		const url = require(`./assets/work_assets/${item.image}_thumbnail.jpg`);
		const imageStyle = { backgroundImage: `url(${url})` };
		return (
			<div className='item-container'>
				<div className='item-image' style={imageStyle}></div>
				<a href={item.url} />
			</div>
		);
	};

	render() {
		return (
			<div className='app-root'>
				<this.LandingSection />
				<this.ServicesSection />
				<this.WebWorksSection />
			</div>
		);
	}
}

export default App;

import React from 'react';
import './App.scss';

interface Props {
	item: {
		icon: string;
		title: string;
		subtitle: string;
	};
}

class SectionHeader extends React.Component<Props> {
	render() {
		const { item } = this.props;
		const url = require(`./assets/header_assets/${item.icon}`);
		const iconObj = { backgroundImage: `url(${url})` };

		return (
			<div className='section-header'>
				<div className='header-icon' style={iconObj}></div>
				<div className='header-title'>{item.title}</div>
				<div className='header-subtitle'>{item.subtitle}</div>
			</div>
		);
	}
}

export default SectionHeader;

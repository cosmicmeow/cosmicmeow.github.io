import React from 'react';
import './App.scss';
import SectionHeader from './SectionHeader';
import stickers from './data/stickersData';

interface StickerDataType {
	name: string;
	url: string;
	image: string;
}

class Illustrations extends React.Component {
	Sticker = ({ key, item }: { key: string; item: StickerDataType }) => {
		const url = require(`./assets/stickers/sticker_${item.image}.png`);

		return (
			<div className='sticker-container'>
				{item.url.length > 0 ? (
					<a
						key={key}
						className='sticker-has-link'
						href={item.url}
						target='_blank'>
						<img className='sticker-image' src={url} />
					</a>
				) : (
					<img key={key} className='sticker-image' src={url} />
				)}
			</div>
		);
	};
	render() {
		const item = {
			icon: 'bun_illustration.png',
			title: 'Illustrations',
			subtitle:
				"I'm also an illustrator! I am available for logo/mascot designs, illustration, and conference slide deck. Here are some of my best commissions!",
		};

		return (
			<div id='illustrations' className='section-container'>
				<div className='page-container'>
					<SectionHeader item={item} />
					<div className='stickers-container'>
						{stickers.map(el => {
							return <this.Sticker key={el.name} item={el} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Illustrations;

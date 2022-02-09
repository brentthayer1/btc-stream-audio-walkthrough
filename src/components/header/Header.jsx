import React from 'react';
import './Header.css';
import Navigation from '../navigation/Navigation';

function Header() {
	return (
		<h1 className='hdr'>
			<img
				className='img'
				src={
					'https://i1.sndcdn.com/avatars-qD0E3nRfIBQ731Og-03vdiQ-t240x240.jpg'
				}
				alt=''
			/>
			<Navigation />
		</h1>
	);
}

export default Header;

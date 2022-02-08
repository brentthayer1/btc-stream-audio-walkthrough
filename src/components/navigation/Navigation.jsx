import React from 'react';
import Button from '../button/Button';
import './Navigation.css';

function Navigation() {
	return (
		<div className='nav'>
			<Button page={'/'} title={'Home'} />
			<Button page={'/setup'} title={'Setup'} />
			<Button page={'/recording'} title={'Recording'} />
			<Button page={'/mixing'} title={'Mixing'} />
		</div>
	);
}

export default Navigation;

import React from 'react';
import Button from '../button/Button';
import './Navigation.css';

function Navigation() {
	return (
		<div className='nav'>
			<Button page={'/'} title={'Home'} />
			<Button page={'/setup'} title={'Setup'} />
			<Button page={'/control-surface'} title={'Control Surface'} />
			<Button page={'/recording'} title={'Recording'} />
			<Button page={'/mixing'} title={'Mixing'} />
			<Button page={'/vocal-processing'} title={'Vocal Processing'} />
			<Button page={'/instrument-processing'} title={'Instrument Processing'} />
			<Button page={'/returns'} title={'Returns'} />
			<Button page={'/master-out'} title={'Master Out'} />
		</div>
	);
}

export default Navigation;

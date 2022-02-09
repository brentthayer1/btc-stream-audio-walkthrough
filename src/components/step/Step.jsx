import React from 'react';
import './Step.css';

function Step({ step }) {
	return (
		<div className='stp'>
			<h4 className='step-name'>
				{'- ' + step.name + ' -'}
				<p className='step-desc'>{step.description}</p>
				<img className='img' src={step.img} alt={'img'}></img>
			</h4>
		</div>
	);
}

export default Step;

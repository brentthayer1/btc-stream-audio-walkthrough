import React from 'react';
import './Step.css';

function Step({ step }) {
	return (
		<div className='stp' key={step.id}>
			<h4 className='step-name'>{step.id + '. ' + step.name}</h4>
			<p className='step-desc'>{step.description}</p>
			<img className='img' src={step.img} alt={'img'}></img>
		</div>
	);
}

export default Step;

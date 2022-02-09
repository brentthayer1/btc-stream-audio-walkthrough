import React from 'react';
import './Process.css';
import Step from '../step/Step';

function Process({ process }) {
	const steps = process.steps.map((step) => (
		<Step key={step.name} step={step} />
	));
	return (
		<div className='prcs'>
			<h2 className='prcs-name' key={process.name}>
				{process.name}
				<img className='img' src={process.img} alt='' />
			</h2>
			<p className='desc'>{process.description}</p>
			<div>{steps}</div>
		</div>
	);
}

export default Process;

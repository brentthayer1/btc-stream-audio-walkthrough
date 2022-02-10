import React from 'react';
import './Process.css';
import Step from '../step/Step';

function Process({ process }) {
	const steps = process.steps.map((step) => (
		<Step key={step.name} step={step} />
	));

	let processImg;
	if (process.img) {
		processImg = <img className='img' src={process.img} alt='' />;
	} else {
		processImg = null;
	}

	return (
		<div className='prcs'>
			<h2 className='prcs-name' key={process.name}>
				{process.name}

				{processImg}
			</h2>
			<p className='desc'>{process.description}</p>
			<div>{steps}</div>
			<hr />
		</div>
	);
}

export default Process;

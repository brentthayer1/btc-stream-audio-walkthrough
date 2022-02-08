import React from 'react';
import './Process.css';
import Step from '../step/Step';

function Process({ process }) {
	const steps = process.steps.map((step) => <Step step={step} />);
	return (
		<div className='prcs'>
			<h3 className='prcs-name' key={process.id}>
				{process.id + '. ' + process.name}
			</h3>
			<div>{steps}</div>
		</div>
	);
}

export default Process;

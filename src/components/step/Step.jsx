import React from 'react';
import './Step.css';

function Step({ step }) {
	let stepImg;
	if (step.img) {
		stepImg = <img className='img' src={step.img} alt='' />;
	} else {
		stepImg = null;
	}

	return (
		<div className='stp'>
			<h4 className='step-name'>
				{'- ' + step.name + ' -'}
				<p className='step-desc'>{step.description}</p>
				{stepImg}
			</h4>
		</div>
	);
}

export default Step;

import React from 'react';
import './Section.css';
import Process from '../process/Process';

function Section({ section }) {
	const processes = section.process.map((process) => (
		<Process process={process} />
	));
	return (
		<div className='sctn'>
			<h2 className='title'>{section.name}</h2>
			<p className='desc'>{section.description}</p>
			<div>{processes}</div>
		</div>
	);
}

export default Section;
import React from 'react';
import './Section.css';
import Process from '../process/Process';

function Section({ section }) {
	const processes = section.process.map((process) => (
		<Process key={process.name} process={process} />
	));
	return (
		<div className='sctn'>
			<h1 key={section.name} className='title'>
				{section.name}
			</h1>
			<p key={section.name} className='desc'>
				{section.description}
			</p>
			<div>{processes}</div>
		</div>
	);
}

export default Section;

import React from 'react';
import Section from '../../components/section/Section';

function Recording({ section }) {
	// return <div>Recording Mixing</div>;
	return (
		<div>
			<Section key={section.name} section={section} />;
		</div>
	);
}

export default Recording;

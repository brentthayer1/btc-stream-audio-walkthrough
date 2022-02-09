import React from 'react';
import Section from '../../components/section/Section';

function Recording({ id, section }) {
	// return <div>Recording Mixing</div>;
	return (
		<div>
			<Section id={section.name} section={section} />;
		</div>
	);
}

export default Recording;

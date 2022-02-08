import React from 'react';
import Section from '../../components/section/Section';

function Recording({ key, section }) {
	// return <div>Recording Mixing</div>;
	return (
		<div>
			<Section key={key} section={section} />;
		</div>
	);
}

export default Recording;

import React from 'react';
import Section from '../../components/section/Section';

function Mixing({ key, section }) {
	// return <div>Recording Mixing</div>;
	return (
		<div>
			<Section key={key} section={section} />;
		</div>
	);
}

export default Mixing;

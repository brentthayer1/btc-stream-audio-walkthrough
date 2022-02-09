import React from 'react';
import Section from '../../components/section/Section';

function ControlSurface({ section }) {
	return (
		<div>
			<Section key={section.name} section={section} />;
		</div>
	);
}

export default ControlSurface;

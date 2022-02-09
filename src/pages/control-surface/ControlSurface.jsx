import React from 'react';
import Section from '../../components/section/Section';

function ControlSurface({ id, section }) {
	return (
		<div>
			<Section id={section.name} section={section} />;
		</div>
	);
}

export default ControlSurface;

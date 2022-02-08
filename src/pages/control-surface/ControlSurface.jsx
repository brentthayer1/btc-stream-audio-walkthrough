import React from 'react';
import Section from '../../components/section/Section';

function ControlSurface({ key, section }) {
	return (
		<div>
			<Section key={key} section={section} />;
		</div>
	);
}

export default ControlSurface;

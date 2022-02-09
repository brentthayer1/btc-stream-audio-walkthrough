import React from 'react';
import Section from '../../components/section/Section';
import { useNavigate } from 'react-router-dom';

function Setup({ id, section }) {
	return (
		<div>
			<Section id={section.name} section={section} />;
		</div>
	);
}

export default Setup;

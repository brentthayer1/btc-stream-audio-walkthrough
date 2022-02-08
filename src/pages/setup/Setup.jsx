import React from 'react';
import Section from '../../components/section/Section';
import { useNavigate } from 'react-router-dom';

function Setup({ key, section }) {
	return (
		<div>
			<Section key={key} section={section} />;
		</div>
	);
}

export default Setup;

import React from 'react';
import Section from '../../components/section/Section';

function MasterOut({ section }) {
	return (
		<div>
			<Section key={section.name} section={section} />;
		</div>
	);
}

export default MasterOut;

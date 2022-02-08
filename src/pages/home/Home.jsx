import React from 'react';

import Section from '../../components/section/Section';
import { useNavigate } from 'react-router-dom';

function Home({ key, section }) {
	// const navigate = useNavigate();
	return (
		<div>
			<Section key={key} section={section} />
			{/* <button onClick={() => navigate('/setup')}>Setup</button>
			<button onClick={() => navigate('/recording-mixing')}>
				Recording / Mixing
			</button> */}
		</div>
	);
}

export default Home;

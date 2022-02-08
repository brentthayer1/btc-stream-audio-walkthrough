import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

function Button({ page, title }) {
	const navigate = useNavigate();
	return (
		<button className='btn' onClick={() => navigate(page)}>
			{title}
		</button>
	);
}

export default Button;

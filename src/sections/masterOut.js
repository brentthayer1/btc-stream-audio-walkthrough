export const masterOut = {
	name: 'Master Out',
	description: 'desc',
	process: [
		{
			name: 'Chain',
			description: 'Desc',
			steps: [
				{
					name: 'EQ',
					description: 'Minimal EQ',
					img: 'img',
				},
				{
					name: 'SSL Compressor',
					description: 'Ensure the compressor is reducing gain around 1 dB',
					img: 'img',
				},
				{
					name: 'L2 Limiter',
					description:
						'Ensure threshold is lowered until only a few peaks are being reduced and overall level is consistently around -0.2 dB',
					img: 'img',
				},
			],
		},
	],
};

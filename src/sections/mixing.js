export const mixing = {
	name: 'Mixing',
	description: 'These steps will guide through mixing',
	process: [
		{
			name: 'Mixing Setup',
			description: 'Steps for completing a mix',
			steps: [
				{
					name: 'Audio Input',
					description: 'Disconnect Ableton from X32',
					img: 'img',
				},
				{
					name: 'Mix',
					description: 'Perform mix processing',
					img: 'img',
				},
				{
					name: 'Delete',
					description:
						'When mix is complete, delete all previously recorded tracks',
					img: 'img',
				},
				{
					name: 'Audio Input',
					description: 'Reconnect Ableton to X32',
					img: 'img',
				},
				{
					name: 'Record Enable',
					description: 'Disable record enable on all INPUT tracks',
					img: 'img',
				},
			],
		},
		{
			name: 'Monitor Input Gain ',
			description: 'Appropriate input will allow for a smoother flow',
			steps: [
				{
					name: 'Channel Input',
					description: 'Each channel input will be controlled individually',
					img: 'img',
				},
				{
					name: 'Channel Gain',
					description:
						'Each channel should be gained to right around -12 dB at peaks',
					img: 'img',
				},
				{
					name: 'Continuous',
					description:
						'This is something that be dialed in once something has been recorded',
					img: 'img',
				},
			],
		},
	],
};

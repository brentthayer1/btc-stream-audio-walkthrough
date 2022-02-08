export const mixing = {
	id: 1,
	name: 'Mixing',
	description: 'These steps will guide through mixing',
	process: [
		{
			id: 1,
			name: 'Preliminary Mixdown',
			description: 'Steps for completing a mix',
			steps: [
				{
					id: 'a',
					name: 'Audio Input',
					description: 'Disconnect Ableton from X32',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Mix',
					description: 'Perform mix processing',
					img: 'img',
				},
				{
					id: 'c',
					name: 'Delete',
					description:
						'When mix is complete, delete all previously recorded tracks',
					img: 'img',
				},
				{
					id: 'd',
					name: 'Audio Input',
					description: 'Reconnect Ableton to X32',
					img: 'img',
				},
				{
					id: 'e',
					name: 'Record Enable',
					description: 'Disable record enable on all INPUT tracks',
					img: 'img',
				},
			],
		},
		{
			id: 2,
			name: 'Monitor Input Gain ',
			description: 'Appropriate input will allow for a smoother flow',
			steps: [
				{
					id: 'a',
					name: 'Channel Input',
					description: 'Each channel input will be controlled individually',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Channel Gain',
					description:
						'Each channel should be gained to right around -12 dB at peaks',
					img: 'img',
				},
				{
					id: 'c',
					name: 'Continuous',
					description:
						'This is something that be dialed in once something has been recorded',
					img: 'img',
				},
			],
		},
	],
};
